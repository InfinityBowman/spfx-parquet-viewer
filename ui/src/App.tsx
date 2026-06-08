import { useEffect, useState } from 'react'
import { parquetReadObjects } from 'hyparquet'
import { compressors } from 'hyparquet-compressors'
import type { ParquetAppProps } from './types'

type Row = Record<string, unknown>

const ROW_LIMIT = 200

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return ''
  if (value instanceof Date) return value.toISOString()
  if (typeof value === 'bigint') return value.toString()
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

/** Turn an unknown thrown value into a readable message (not "[object Object]"). */
function describeError(e: unknown): string {
  if (e instanceof Error) return e.message
  if (typeof e === 'string') return e
  if (e && typeof e === 'object') {
    const obj = e as Record<string, unknown>
    if (typeof obj.message === 'string') return obj.message
    const str = Object.prototype.toString.call(e) === '[object Object]' ? '' : String(e)
    if (str) return str
    try {
      const json = JSON.stringify(e)
      if (json && json !== '{}') return json
    } catch {
      /* fall through */
    }
    return `Non-Error thrown (${Object.prototype.toString.call(e)}); keys: [${Object.keys(obj).join(', ')}] — see console`
  }
  return String(e)
}

export default function App({ filePath, openFile }: ParquetAppProps) {
  const [rows, setRows] = useState<Row[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setRows(null)
    setError(null)
    if (!filePath) {
      setError('Set a parquet file path in the web part properties.')
      return
    }
    openFile(filePath)
      .then((file) => parquetReadObjects({ file, compressors, rowEnd: ROW_LIMIT }))
      .then((result) => {
        if (!cancelled) setRows(result as Row[])
      })
      .catch((e: unknown) => {
        console.error('[ParquetViewer] failed to load', filePath, e)
        if (!cancelled) setError(describeError(e))
      })
    return () => {
      cancelled = true
    }
  }, [filePath, openFile])

  if (error) {
    return (
      <div className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800">
        {error}
      </div>
    )
  }

  if (!rows) {
    return <div className="p-4 text-sm text-gray-500">Loading {filePath}…</div>
  }

  if (rows.length === 0) {
    return <div className="p-4 text-sm text-gray-500">No rows in {filePath}.</div>
  }

  const columns = Object.keys(rows[0])

  return (
    <div className="overflow-x-auto">
      <div className="mb-2 text-xs text-gray-500">
        {filePath} — showing {rows.length} row{rows.length === 1 ? '' : 's'}
        {rows.length === ROW_LIMIT ? ` (first ${ROW_LIMIT})` : ''}
      </div>
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border-b-2 border-gray-300 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-700"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              {columns.map((col) => (
                <td key={col} className="border-b border-gray-200 px-3 py-1.5 text-gray-800">
                  {formatCell(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
