import { useEffect, useState } from 'react';
import { parquetReadObjects, asyncBufferFromUrl, cachedAsyncBuffer } from 'hyparquet';
import { compressors } from 'hyparquet-compressors';
import type { ParquetViewerProps } from './mount';

type Row = Record<string, unknown>;

const ROW_LIMIT = 200;

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

const styles = {
  message: { padding: '1em', fontFamily: 'Segoe UI, sans-serif', fontSize: 13, color: '#605e5c' },
  error: {
    margin: '1em',
    padding: '12px 16px',
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: 13,
    color: '#a4262c',
    background: '#fde7e9',
    border: '1px solid #f3d6d8',
    borderRadius: 4,
    whiteSpace: 'pre-wrap' as const
  },
  wrap: { padding: '1em', fontFamily: 'Segoe UI, sans-serif', overflowX: 'auto' as const },
  caption: { marginBottom: 8, fontSize: 12, color: '#605e5c' },
  table: { minWidth: '100%', borderCollapse: 'collapse' as const, fontSize: 13 },
  th: {
    borderBottom: '2px solid #d2d0ce',
    background: '#faf9f8',
    padding: '6px 12px',
    textAlign: 'left' as const,
    fontWeight: 600,
    color: '#323130',
    whiteSpace: 'nowrap' as const
  },
  td: { borderBottom: '1px solid #edebe9', padding: '5px 12px', color: '#323130' }
};

export function App({ filePath, fetchFile }: ParquetViewerProps) {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setRows(null);
    setError(null);
    if (!filePath) {
      setError('Set a parquet file path in the web part properties.');
      return;
    }
    // asyncBufferFromUrl issues a HEAD for the file size, then Range GETs for the
    // footer + only the row groups parquetReadObjects asks for. cachedAsyncBuffer
    // dedupes overlapping reads (e.g. footer/metadata). If the endpoint ignores
    // Range and returns the whole file (200), hyparquet transparently falls back.
    (async () => {
      const file = cachedAsyncBuffer(
        await asyncBufferFromUrl({ url: filePath, fetch: fetchFile })
      );
      return parquetReadObjects({ file, compressors, rowEnd: ROW_LIMIT });
    })()
      .then((result) => {
        if (!cancelled) setRows(result as Row[]);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      });
    return () => {
      cancelled = true;
    };
  }, [filePath, fetchFile]);

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  if (!rows) {
    return <div style={styles.message}>Loading {filePath}…</div>;
  }

  if (rows.length === 0) {
    return <div style={styles.message}>No rows in {filePath}.</div>;
  }

  const columns = Object.keys(rows[0]);

  return (
    <div style={styles.wrap}>
      <div style={styles.caption}>
        {filePath} — showing {rows.length} row{rows.length === 1 ? '' : 's'}
        {rows.length === ROW_LIMIT ? ` (first ${ROW_LIMIT})` : ''}
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} style={styles.th}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={i % 2 ? { background: '#faf9f8' } : undefined}>
              {columns.map((col) => (
                <td key={col} style={styles.td}>
                  {formatCell(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
