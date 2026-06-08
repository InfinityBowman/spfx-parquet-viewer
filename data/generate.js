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
 *   out/demo.parquet              (snappy, many row groups → good for ranged reads)
 *   ../ui/public/sample.parquet   (so `pnpm dev` in ui/ has data immediately)
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

// deterministic PRNG so regenerating gives the same data
let seed = 42
function rand() {
  seed = (seed * 1103515245 + 12345) % 2 ** 31
  return seed / 2 ** 31
}
const pick = (arr) => arr[Math.floor(rand() * arr.length)]

const REGIONS = ['North', 'South', 'East', 'West', 'Central']
const PRODUCTS = ['Widget', 'Gadget', 'Doohickey', 'Gizmo', 'Thingamajig']
const CHANNELS = ['Online', 'Retail', 'Partner']
const start = Date.UTC(2025, 0, 1)

/** Generate `count` rows starting at id `idStart`; returns parquet columns + CSV text. */
function buildBatch(count, idStart) {
  const ids = []
  const dates = []
  const regions = []
  const products = []
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
    const product = pick(PRODUCTS)
    const channel = pick(CHANNELS)
    const total = Math.round(u * price * 100) / 100
    const isFulfilled = rand() > 0.1

    ids.push(id)
    dates.push(date)
    regions.push(region)
    products.push(product)
    channels.push(channel)
    units.push(u)
    unitPrices.push(price)
    totals.push(total)
    fulfilled.push(isFulfilled)
    lines.push(
      `${id},${date.toISOString().slice(0, 10)},${region},${product},${channel},${u},${price.toFixed(2)},${total.toFixed(2)},${isFulfilled}`,
    )
  }

  const columnData = [
    { name: 'id', data: ids, type: 'INT32' },
    { name: 'date', data: dates, type: 'TIMESTAMP' },
    { name: 'region', data: regions, type: 'STRING' },
    { name: 'product', data: products, type: 'STRING' },
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

const header = 'id,date,region,product,channel,units,unit_price,total,fulfilled'
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

copyFileSync('out/demo.parquet', '../ui/public/sample.parquet')

// --- verify the parquet round-trips, via partial (ranged) reads only ---
const ab = await fileAsyncBuffer('out/demo.parquet')
const rows = await parquetReadObjects({ file: ab, compressors, rowEnd: 2 })
await ab.close()

// --- compression report (csv → snappy parquet) ---
const csvBytes = statSync('out/demo.csv').size
const parquetBytes = statSync('out/demo.parquet').size
const mib = (n) => `${(n / 1024 / 1024).toFixed(1)} MiB`
console.log(`wrote ${ROWS.toLocaleString()} rows → out/demo.csv, out/demo.parquet, ../ui/public/sample.parquet`)
console.log(`row groups: ${Math.ceil(ROWS / ROW_GROUP_SIZE).toLocaleString()} (${ROW_GROUP_SIZE.toLocaleString()} rows each)`)
console.log(
  `compression: csv ${mib(csvBytes)} → parquet ${mib(parquetBytes)} ` +
    `(${(csvBytes / parquetBytes).toFixed(2)}× smaller, ${(100 - (parquetBytes / csvBytes) * 100).toFixed(1)}% reduction)`,
)
console.log('read-back check (ranged read), first row:', rows[0])
