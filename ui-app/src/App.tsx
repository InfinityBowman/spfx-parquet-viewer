import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { parquetReadObjects, asyncBufferFromUrl, cachedAsyncBuffer } from 'hyparquet';
import { compressors } from 'hyparquet-compressors';
import type { ParquetViewerProps } from './mount';
import twCss from './index.css?inline';

type Row = Record<string, unknown>;

const ROW_LIMIT = 200;
// String columns with at most this many distinct values (and short text) render
// as colored category pills instead of plain text — data-driven, not hardcoded,
// so region/channel light up while high-cardinality sku/id stay plain.
const CATEGORY_MAX_DISTINCT = 16;
const CATEGORY_MAX_LEN = 24;

// Inject Tailwind's compiled CSS (string) into a <style> tag. The Vite lib build
// emits a separate explorer.css the SPFx host never loads, so we inline it here to
// keep the bundle self-contained. NOTE: this includes Tailwind Preflight, whose
// bare-element selectors apply to the whole host page.
const STYLE_ID = 'pqv-tw';
function useInjectedStyles(): void {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = twCss;
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
  if (value === null || value === undefined) return <span className="text-neutral-400">—</span>;

  switch (kind) {
    case 'boolean': {
      const on = value === true;
      return (
        <span className="inline-flex items-center gap-1.5 text-[12px]">
          <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: on ? '#16a34a' : '#c4c4cc' }} />
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
      return (
        <span className="inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-medium" style={categoryStyle(String(value))}>
          {String(value)}
        </span>
      );
    default:
      return typeof value === 'object' ? JSON.stringify(value) : String(value);
  }
}

function baseName(path: string): string {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
  return decodeURIComponent(clean.split('/').pop() || path);
}

// ---------------------------------------------------------------------------
// Shell + states
// ---------------------------------------------------------------------------
const ROOT = 'pqv-root font-sans text-[13px] leading-snug text-neutral-900 antialiased';
const CARD =
  'rounded-xl border border-neutral-200 bg-white overflow-hidden ' +
  'shadow-[0_1px_2px_rgba(20,20,30,0.04),0_10px_30px_-15px_rgba(20,20,30,0.15)]';

function Toolbar({ name, path, children }: { name: string; path?: string; children?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-[18px] py-3.5">
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-[15px] font-semibold tracking-tight text-neutral-900">{name}</span>
        {path && <span className="mt-px truncate text-[11.5px] text-neutral-400">{path}</span>}
      </div>
      {children && <div className="flex shrink-0 gap-2">{children}</div>}
    </div>
  );
}

function Shell({ name, path, children }: { name?: string; path?: string; children: ReactNode }) {
  return (
    <div className={ROOT}>
      <div className={CARD}>
        <div className="h-[3px] bg-gradient-to-r from-teal-700 to-teal-400" />
        {name && <Toolbar name={name} path={path} />}
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
          <div className="flex gap-4 border-b border-neutral-100 px-4 py-[9px]" key={i}>
            {Array.from({ length: 5 }).map((_, j) => (
              <div
                className={`h-[11px] flex-1 animate-pulse rounded-md bg-neutral-200 ${j === 0 ? 'max-w-12' : ''}`}
                key={j}
                style={{ opacity: 1 - i * 0.09 }}
              />
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
        <div className="px-[18px] py-7">
          <div className="whitespace-pre-wrap rounded-lg border-l-[3px] border-red-700 bg-red-50 px-[18px] py-3.5 text-[13px] text-red-800">
            <b className="mb-1 block font-semibold text-red-900">Couldn’t load this file</b>
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
        <div className="px-[18px] py-7 text-[13px] text-neutral-500">This file has no rows.</div>
      </Shell>
    );
  }

  const capped = rows.length === ROW_LIMIT;

  return (
    <div className={ROOT}>
      <div className={CARD}>
        <div className="h-[3px] bg-gradient-to-r from-teal-700 to-teal-400" />
        <Toolbar name={baseName(filePath)} path={filePath}>
          <span className="inline-flex items-baseline gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11.5px] whitespace-nowrap text-neutral-500">
            <b className="text-[13px] font-semibold tabular-nums text-neutral-900">{intFmt.format(columns.length)}</b> columns
          </span>
          <span className="inline-flex items-baseline gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[11.5px] whitespace-nowrap text-teal-700">
            <b className="text-[13px] font-semibold tabular-nums text-teal-700">{intFmt.format(rows.length)}</b> {capped ? 'rows · preview' : 'rows'}
          </span>
        </Toolbar>

        <div className="max-h-[72vh] overflow-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                {colMeta.map((c) => (
                  <th
                    key={c.key}
                    className={`sticky top-0 z-10 select-none border-b border-neutral-300 bg-white px-4 py-[9px] text-[10.5px] font-semibold tracking-[0.06em] whitespace-nowrap text-neutral-500 uppercase ${
                      c.numeric ? 'text-right' : 'text-left'
                    }`}
                  >
                    {c.key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="transition-colors even:bg-neutral-50/70 hover:bg-teal-50 last:[&>td]:border-b-0">
                  {colMeta.map((c) => (
                    <td
                      key={c.key}
                      className={`border-b border-neutral-100 px-4 py-[9px] whitespace-nowrap ${
                        c.numeric ? 'text-right font-mono text-[12.5px] tabular-nums text-neutral-800' : 'text-left text-neutral-800'
                      }`}
                    >
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
