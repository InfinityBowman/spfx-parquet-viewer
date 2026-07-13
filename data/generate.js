/**
 * Generates demo sales data as CSV + snappy-compressed parquet.
 *
 *   pnpm generate            → 1000 rows
 *   pnpm generate 50000      → 50000 rows
 *   pnpm generate 2gb        → ~enough rows for a 2 GiB CSV
 *
 * Both files are written incrementally (streamed CSV + row-group-at-a-time
 * parquet via ParquetWriter), so memory stays bounded regardless of size —
 * a 2 GB CSV does not need a 2 GB string in memory.
 *
 * Outputs:
 *   out/demo.csv
 *   out/demo.parquet                  (snappy, many row groups → good for ranged reads)
 *   ../ui-app/public/sample.parquet   (dev-harness data; skipped when > 100 MiB)
 */
import { mkdirSync, copyFileSync, statSync, createWriteStream } from 'node:fs'
import { open, stat } from 'node:fs/promises'
import { finished } from 'node:stream/promises'
import { ParquetWriter, fileWriter, schemaFromColumnData } from 'hyparquet-writer'
import { parquetReadObjects } from 'hyparquet'
import { compressors } from 'hyparquet-compressors'

// ~bytes per CSV row, measured empirically — used to turn a size target into a
// row count. Approximate; the actual file lands within a percent or two.
const BYTES_PER_ROW = 60.5
const BATCH = 1_000_000 // rows generated + written per iteration (bounds memory)
const ROW_GROUP_SIZE = 100_000 // parquet rows per row group (→ many row groups)

function parseTarget(arg) {
  if (arg === undefined) return 1000
  const m = String(arg).trim().match(/^([\d.]+)\s*(gb|gib|mb|mib|kb|kib)$/i)
  if (m) {
    const unit = m[2].toLowerCase()
    const mult = unit[0] === 'g' ? 1024 ** 3 : unit[0] === 'm' ? 1024 ** 2 : 1024
    return Math.max(1, Math.round((parseFloat(m[1]) * mult) / BYTES_PER_ROW))
  }
  const n = Math.floor(Number(arg))
  if (!Number.isFinite(n) || n < 1) {
    throw new Error(`invalid row count / size: "${arg}" (try a number, or "2gb")`)
  }
  return n
}

const ROWS = parseTarget(process.argv[2])

// deterministic PRNG so regenerating gives the same data. mulberry32, not a
// plain LCG: an LCG's `seed * 1103515245` overflows 2^53 in JS floats and loses
// precision, which collapses high-resolution draws (e.g. a 1M-space sku) to only
// ~11k distinct values. mulberry32 uses Math.imul (true 32-bit multiply), so
// draws stay uniform across the full 32-bit range.
let seed = 42
function rand() {
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}
const pick = (arr) => arr[Math.floor(rand() * arr.length)]

const REGIONS = ['North', 'South', 'East', 'West', 'Central']
const CHANNELS = ['Online', 'Retail', 'Partner']
// High-cardinality column: SKUs drawn from a 1,000,000-value space. With 100k
// rows per row group, nearly every value in a group is distinct — so the
// per-group dictionary stops being small and exercises the wide-dictionary /
// plain-encoding path, unlike the low-cardinality region/channel columns.
const SKU_POOL = 1_000_000
const sku = () => `SKU-${String(Math.floor(rand() * SKU_POOL)).padStart(6, '0')}`
const start = Date.UTC(2025, 0, 1)

/** Generate `count` rows starting at id `idStart`; returns parquet columns + CSV text. */
function buildBatch(count, idStart) {
  const ids = []
  const dates = []
  const regions = []
  const skus = []
  const channels = []
  const units = []
  const unitPrices = []
  const totals = []
  const fulfilled = []
  const lines = []

  for (let k = 0; k < count; k++) {
    const id = idStart + k
    const date = new Date(start + Math.floor(rand() * 365) * 86400000)
    const u = 1 + Math.floor(rand() * 50)
    const price = Math.round((5 + rand() * 95) * 100) / 100
    const region = pick(REGIONS)
    const skuValue = sku()
    const channel = pick(CHANNELS)
    const total = Math.round(u * price * 100) / 100
    const isFulfilled = rand() > 0.1

    ids.push(id)
    dates.push(date)
    regions.push(region)
    skus.push(skuValue)
    channels.push(channel)
    units.push(u)
    unitPrices.push(price)
    totals.push(total)
    fulfilled.push(isFulfilled)
    lines.push(
      `${id},${date.toISOString().slice(0, 10)},${region},${skuValue},${channel},${u},${price.toFixed(2)},${total.toFixed(2)},${isFulfilled}`,
    )
  }

  const columnData = [
    { name: 'id', data: ids, type: 'INT32' },
    { name: 'date', data: dates, type: 'TIMESTAMP' },
    { name: 'region', data: regions, type: 'STRING' },
    { name: 'sku', data: skus, type: 'STRING' },
    { name: 'channel', data: channels, type: 'STRING' },
    { name: 'units', data: units, type: 'INT32' },
    { name: 'unit_price', data: unitPrices, type: 'DOUBLE' },
    { name: 'total', data: totals, type: 'DOUBLE' },
    { name: 'fulfilled', data: fulfilled, type: 'BOOLEAN' },
  ]
  return { columnData, csvText: `${lines.join('\n')}\n` }
}

/** Write to a stream, honoring backpressure. */
function writeChunk(stream, text) {
  if (stream.write(text)) return Promise.resolve()
  return new Promise((resolve) => stream.once('drain', resolve))
}

/** Minimal file-backed AsyncBuffer for hyparquet — reads only the byte ranges asked for. */
async function fileAsyncBuffer(path) {
  const { size } = await stat(path)
  const fh = await open(path, 'r')
  return {
    byteLength: size,
    async slice(rangeStart, rangeEnd = size) {
      const len = rangeEnd - rangeStart
      const buf = Buffer.allocUnsafe(len)
      await fh.read(buf, 0, len, rangeStart)
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + len)
    },
    close: () => fh.close(),
  }
}

mkdirSync('out', { recursive: true })

const header = 'id,date,region,sku,channel,units,unit_price,total,fulfilled'
const csv = createWriteStream('out/demo.csv')
await writeChunk(csv, `${header}\n`)

let writer
let written = 0
while (written < ROWS) {
  const n = Math.min(BATCH, ROWS - written)
  const { columnData, csvText } = buildBatch(n, written + 1)
  if (!writer) {
    writer = new ParquetWriter({
      writer: fileWriter('out/demo.parquet'),
      schema: schemaFromColumnData({ columnData }),
    })
  }
  await writer.write({ columnData, rowGroupSize: ROW_GROUP_SIZE })
  await writeChunk(csv, csvText)
  written += n
  if (ROWS > BATCH) {
    process.stdout.write(`\r  ${written.toLocaleString()} / ${ROWS.toLocaleString()} rows`)
  }
}
if (ROWS > BATCH) process.stdout.write('\n')

await writer.finish()
csv.end()
await finished(csv)

// Refresh the dev-harness sample only for modest outputs — never copy a huge
// file into ui-app/public (it's served by `pnpm dev` and is gitignored).
const DEV_SAMPLE_MAX = 100 * 1024 * 1024 // 100 MiB
const copiedToDev = statSync('out/demo.parquet').size <= DEV_SAMPLE_MAX
if (copiedToDev) copyFileSync('out/demo.parquet', '../ui-app/public/sample.parquet')

// --- verify the parquet round-trips, via partial (ranged) reads only ---
const ab = await fileAsyncBuffer('out/demo.parquet')
const rows = await parquetReadObjects({ file: ab, compressors, rowEnd: 2 })
await ab.close()

// --- compression report (csv → snappy parquet) ---
const csvBytes = statSync('out/demo.csv').size
const parquetBytes = statSync('out/demo.parquet').size
const mib = (n) => `${(n / 1024 / 1024).toFixed(1)} MiB`
console.log(
  `wrote ${ROWS.toLocaleString()} rows → out/demo.csv, out/demo.parquet` +
    (copiedToDev ? ', ../ui-app/public/sample.parquet' : ' (dev sample skipped: output too large)'),
)
console.log(`row groups: ${Math.ceil(ROWS / ROW_GROUP_SIZE).toLocaleString()} (${ROW_GROUP_SIZE.toLocaleString()} rows each)`)
console.log(
  `compression: csv ${mib(csvBytes)} → parquet ${mib(parquetBytes)} ` +
    `(${(csvBytes / parquetBytes).toFixed(2)}× smaller, ${(100 - (parquetBytes / csvBytes) * 100).toFixed(1)}% reduction)`,
)
console.log('read-back check (ranged read), first row:', rows[0])
