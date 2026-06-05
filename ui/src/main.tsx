/**
 * Dev harness — runs the app standalone under `pnpm dev` with plain fetch()
 * instead of SPHttpClient. Drop a parquet file at ui/public/sample.parquet.
 */
import { mount } from './lib'

mount(document.getElementById('root')!, {
  filePath: '/sample.parquet',
  fetchFile: async (path) => {
    const res = await fetch(path)
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} — did you put a file at ui/public${path}?`)
    return res.arrayBuffer()
  },
})
