/**
 * Dev harness — runs the app standalone under `pnpm dev` with plain fetch()
 * instead of SPHttpClient. Drop a parquet file at ui/public/sample.parquet.
 *
 * Uses ranged (partial) reads: an initial 1-byte probe learns the file size,
 * then each slice() issues an HTTP Range request. Vite's static server answers
 * with `206 Partial Content`, so only the parquet footer + the column chunks
 * hyparquet actually needs come over the wire — watch the Network tab.
 */
import { mount, type AsyncBuffer } from './lib'

async function openFile(path: string): Promise<AsyncBuffer> {
  // One tiny ranged request to learn the total size (and confirm Range support).
  // Use 0-1, not 0-0: Vite's static server (sirv) treats an end of 0 as falsy
  // and returns the WHOLE file for `bytes=0-0`, which would defeat ranged reads.
  const probe = await fetch(path, { headers: { Range: 'bytes=0-1' } })
  if (!probe.ok && probe.status !== 206) {
    throw new Error(`${probe.status} ${probe.statusText} — did you put a file at ui/public${path}?`)
  }
  // "bytes 0-0/123456" → total is after the slash
  const contentRange = probe.headers.get('Content-Range')
  const byteLength = contentRange
    ? Number(contentRange.split('/')[1])
    : Number(probe.headers.get('Content-Length'))
  if (!Number.isFinite(byteLength) || byteLength <= 0) {
    throw new Error(`Could not determine size of ${path}`)
  }

  return {
    byteLength,
    async slice(start, end = byteLength) {
      const from = start < 0 ? byteLength + start : start
      const to = (end < 0 ? byteLength + end : end) - 1 // HTTP Range end is inclusive
      const res = await fetch(path, { headers: { Range: `bytes=${from}-${to}` } })
      if (!res.ok && res.status !== 206) {
        throw new Error(`${res.status} ${res.statusText} fetching bytes ${from}-${to} of ${path}`)
      }
      return res.arrayBuffer()
    },
  }
}

const el = document.getElementById('root')
if (!el) {
  throw new Error('dev harness: #root element not found')
}
mount(el, { filePath: '/sample.parquet', openFile })
