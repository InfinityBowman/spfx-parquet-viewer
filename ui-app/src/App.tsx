import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { parquetReadObjects, asyncBufferFromUrl, cachedAsyncBuffer } from 'hyparquet';
import { compressors } from 'hyparquet-compressors';
import type { ParquetViewerProps } from './mount';

type Row = Record<string, unknown>;

const ROW_LIMIT = 200;
// String columns with at most this many distinct values (and short text) render
// as colored category pills instead of plain text — data-driven, not hardcoded,
// so region/channel light up while high-cardinality sku/id stay plain.
const CATEGORY_MAX_DISTINCT = 16;
const CATEGORY_MAX_LEN = 24;

// ---------------------------------------------------------------------------
// Self-contained styles. Injected as a <style> tag (kept inside the bundle, no
// external CSS file to load) so :hover, sticky headers, zebra striping, and the
// loading shimmer all work without tripping SharePoint's CSP.
// ---------------------------------------------------------------------------
const STYLE_ID = 'pqv-styles';
const CSS = `
.pqv-root {
  --ink: #1b1b1f;
  --muted: #6b6b76;
  --faint: #9aa0a6;
  --line: #ececef;
  --line-strong: #dcdce1;
  --zebra: #fafafb;
  --hover: #eef6f4;
  --accent: #0f766e;
  --accent-soft: #e6f4f1;
  --radius: 12px;
  color: var(--ink);
  font-family: "Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif;
  font-size: 13px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
}
.pqv-mono {
  font-family: ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace;
  font-variant-numeric: tabular-nums;
  font-size: 12.5px;
}

.pqv-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 20, 30, .04), 0 8px 24px -12px rgba(20, 20, 30, .12);
  overflow: hidden;
}
.pqv-accentbar { height: 3px; background: linear-gradient(90deg, var(--accent), #2dd4bf); }

.pqv-toolbar {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px 18px; border-bottom: 1px solid var(--line);
}
.pqv-title { display: flex; flex-direction: column; min-width: 0; }
.pqv-name {
  font-size: 15px; font-weight: 650; letter-spacing: -.01em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.pqv-path {
  font-size: 11.5px; color: var(--faint); margin-top: 1px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.pqv-chips { display: flex; gap: 8px; flex: none; }
.pqv-chip {
  display: inline-flex; align-items: baseline; gap: 5px;
  padding: 4px 10px; border-radius: 999px; background: #f4f4f6;
  font-size: 11.5px; color: var(--muted); white-space: nowrap;
}
.pqv-chip b { font-size: 13px; font-weight: 650; color: var(--ink); font-variant-numeric: tabular-nums; }
.pqv-chip--accent { background: var(--accent-soft); color: var(--accent); }
.pqv-chip--accent b { color: var(--accent); }

.pqv-scroll { overflow: auto; max-height: 72vh; }
.pqv-table { width: 100%; border-collapse: separate; border-spacing: 0; }
.pqv-table th, .pqv-table td {
  padding: 9px 16px; text-align: left; border-bottom: 1px solid var(--line);
  white-space: nowrap;
}
.pqv-table th {
  position: sticky; top: 0; z-index: 1; background: #fff;
  font-size: 10.5px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
  color: var(--muted); border-bottom: 1px solid var(--line-strong);
  user-select: none;
}
.pqv-table th .pqv-idx { color: var(--faint); margin-left: 6px; font-weight: 500; letter-spacing: 0; text-transform: none; }
.pqv-num { text-align: right; }
.pqv-table tbody tr { transition: background .08s ease; }
.pqv-table tbody tr:nth-child(even) { background: var(--zebra); }
.pqv-table tbody tr:hover { background: var(--hover); }
.pqv-table tbody tr:last-child td { border-bottom: none; }
.pqv-null { color: var(--faint); }

.pqv-pill {
  display: inline-block; padding: 2px 9px; border-radius: 999px;
  font-size: 11.5px; font-weight: 550; line-height: 1.5;
}
.pqv-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; }
.pqv-dot { width: 7px; height: 7px; border-radius: 50%; flex: none; }

/* states */
.pqv-state { padding: 28px 18px; color: var(--muted); }
.pqv-error {
  border-left: 3px solid #c0362c; background: #fdf3f2; color: #8a2a22;
  padding: 14px 18px; border-radius: 8px; white-space: pre-wrap;
}
.pqv-error b { display: block; margin-bottom: 3px; color: #6f221c; }
.pqv-skel-row { display: flex; gap: 16px; padding: 9px 16px; border-bottom: 1px solid var(--line); }
.pqv-skel {
  height: 11px; border-radius: 6px; flex: 1;
  background: linear-gradient(90deg, #eee 25%, #f6f6f7 37%, #eee 63%);
  background-size: 400% 100%; animation: pqv-shimmer 1.3s ease infinite;
}
@keyframes pqv-shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }
@media (prefers-reduced-motion: reduce) { .pqv-skel { animation: none; } }
`;

function useInjectedStyles(): void {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

// ---------------------------------------------------------------------------
// Type inference + formatting
// ---------------------------------------------------------------------------
type ColKind = 'number' | 'currency' | 'date' | 'boolean' | 'category' | 'text';

interface ColumnMeta {
  key: string;
  kind: ColKind;
  numeric: boolean;
}

const CURRENCY_RE = /(price|total|amount|cost|revenue|sales|value|paid|balance|fee)/i;

const intFmt = new Intl.NumberFormat('en-US');
const numFmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 });
const moneyFmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const dateFmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

function firstNonNull(rows: Row[], key: string): unknown {
  for (const r of rows) {
    const v = r[key];
    if (v !== null && v !== undefined) return v;
  }
  return undefined;
}

function inferColumns(rows: Row[], keys: string[]): ColumnMeta[] {
  return keys.map((key) => {
    const sample = firstNonNull(rows, key);
    let kind: ColKind = 'text';
    if (typeof sample === 'boolean') kind = 'boolean';
    else if (sample instanceof Date) kind = 'date';
    else if (typeof sample === 'bigint' || typeof sample === 'number') {
      kind = CURRENCY_RE.test(key) ? 'currency' : 'number';
    } else if (typeof sample === 'string') {
      // category if few distinct, short values (scan the loaded rows)
      const seen = new Set<string>();
      let tooMany = false;
      let maxLen = 0;
      for (const r of rows) {
        const v = r[key];
        if (typeof v !== 'string') continue;
        maxLen = Math.max(maxLen, v.length);
        if (seen.size <= CATEGORY_MAX_DISTINCT) seen.add(v);
        if (seen.size > CATEGORY_MAX_DISTINCT || maxLen > CATEGORY_MAX_LEN) { tooMany = true; break; }
      }
      kind = tooMany ? 'text' : 'category';
    }
    return { key, kind, numeric: kind === 'number' || kind === 'currency' };
  });
}

// stable, low-saturation color per category value
function categoryStyle(value: string): CSSProperties {
  let h = 0;
  for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) % 360;
  return { background: `hsl(${h} 62% 95%)`, color: `hsl(${h} 42% 32%)`, boxShadow: `inset 0 0 0 1px hsl(${h} 50% 88%)` };
}

function renderCell(value: unknown, kind: ColKind): ReactNode {
  if (value === null || value === undefined) return <span className="pqv-null">—</span>;

  switch (kind) {
    case 'boolean': {
      const on = value === true;
      return (
        <span className="pqv-badge">
          <span className="pqv-dot" style={{ background: on ? '#16a34a' : '#c4c4cc' }} />
          <span style={{ color: on ? '#15803d' : '#8a8a93' }}>{on ? 'Yes' : 'No'}</span>
        </span>
      );
    }
    case 'date':
      return value instanceof Date ? dateFmt.format(value) : String(value);
    case 'currency': {
      const n = typeof value === 'bigint' ? Number(value) : (value as number);
      return moneyFmt.format(n);
    }
    case 'number': {
      const n = typeof value === 'bigint' ? Number(value) : (value as number);
      return Number.isInteger(n) ? intFmt.format(n) : numFmt.format(n);
    }
    case 'category':
      return <span className="pqv-pill" style={categoryStyle(String(value))}>{String(value)}</span>;
    default:
      return typeof value === 'object' ? JSON.stringify(value) : String(value);
  }
}

function baseName(path: string): string {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
  return decodeURIComponent(clean.split('/').pop() || path);
}

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------
function Shell({ name, path, children }: { name?: string; path?: string; children: ReactNode }) {
  return (
    <div className="pqv-root">
      <div className="pqv-card">
        <div className="pqv-accentbar" />
        {name && (
          <div className="pqv-toolbar">
            <div className="pqv-title">
              <span className="pqv-name">{name}</span>
              {path && <span className="pqv-path">{path}</span>}
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

function LoadingState({ filePath }: { filePath: string }) {
  return (
    <Shell name={baseName(filePath)} path={filePath}>
      <div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="pqv-skel-row" key={i}>
            {Array.from({ length: 5 }).map((_, j) => (
              <div className="pqv-skel" key={j} style={{ maxWidth: j === 0 ? 48 : undefined, opacity: 1 - i * 0.09 }} />
            ))}
          </div>
        ))}
      </div>
    </Shell>
  );
}

// ---------------------------------------------------------------------------
export function App({ filePath, fetchFile }: ParquetViewerProps) {
  useInjectedStyles();
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

  const columns = useMemo(() => (rows && rows.length ? Object.keys(rows[0]) : []), [rows]);
  const colMeta = useMemo(() => (rows && rows.length ? inferColumns(rows, columns) : []), [rows, columns]);

  if (error) {
    return (
      <Shell name={filePath ? baseName(filePath) : 'Parquet viewer'} path={filePath || undefined}>
        <div className="pqv-state">
          <div className="pqv-error">
            <b>Couldn’t load this file</b>
            {error}
          </div>
        </div>
      </Shell>
    );
  }

  if (!rows) return <LoadingState filePath={filePath} />;

  if (rows.length === 0) {
    return (
      <Shell name={baseName(filePath)} path={filePath}>
        <div className="pqv-state">This file has no rows.</div>
      </Shell>
    );
  }

  const capped = rows.length === ROW_LIMIT;

  return (
    <div className="pqv-root">
      <div className="pqv-card">
        <div className="pqv-accentbar" />
        <div className="pqv-toolbar">
          <div className="pqv-title">
            <span className="pqv-name">{baseName(filePath)}</span>
            <span className="pqv-path">{filePath}</span>
          </div>
          <div className="pqv-chips">
            <span className="pqv-chip"><b>{intFmt.format(columns.length)}</b> columns</span>
            <span className="pqv-chip pqv-chip--accent">
              <b>{intFmt.format(rows.length)}</b> {capped ? 'rows · preview' : 'rows'}
            </span>
          </div>
        </div>

        <div className="pqv-scroll">
          <table className="pqv-table">
            <thead>
              <tr>
                {colMeta.map((c) => (
                  <th key={c.key} className={c.numeric ? 'pqv-num' : undefined}>{c.key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {colMeta.map((c) => (
                    <td key={c.key} className={`${c.numeric ? 'pqv-num ' : ''}${c.numeric ? 'pqv-mono' : ''}`.trim()}>
                      {renderCell(row[c.key], c.kind)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
