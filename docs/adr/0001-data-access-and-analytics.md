# ADR-0001: Data access and analytics architecture

- **Status:** Partially implemented (D1, D2 implemented; D3–D6 accepted, not yet built)
- **Date:** 2026-06-08
- **Deciders:** Jacob Maynard

## Context

The viewer is a thin SPFx web part that renders Parquet files stored in SharePoint
document libraries. There is **no server-side compute** — all work happens in the
browser, inside the SPFx page, against files the user controls and uploads.

Constraints and goals that shaped these decisions:

- **Files are large.** A representative dataset is ~2 GB CSV → ~821 MB snappy Parquet,
  35.5M rows, 355 row groups (100k rows each). Downloading whole files is a non-starter.
- **The page is same-origin with the data.** The web part runs on
  `*.sharepoint.com`, and so do the files — so the browser's cookies authenticate
  requests to both data and images.
- **We want analytics, not just a table** — e.g. a best-fit (least-squares) line over a
  numeric column, summary statistics, and (later) filtered breakdowns.
- **Each dataset has associated imagery** that is also uploaded to SharePoint and must be
  presented alongside the data.
- The shell stays thin: it owns only SharePoint plumbing (auth + URL resolution); all
  rendering and data logic lives in a Vite-built bundle (`vendor/explorer/explorer.js`)
  that contains `hyparquet`.

## Decisions

### D1 — Transport: HTTP ranged reads via an `AsyncBuffer` — *Implemented (commit `65c2aae`)*

The shell hands the bundle an **authenticated, range-capable `fetch` primitive**
(`fetchFile: typeof globalThis.fetch`) backed by `SPHttpClient`. The bundle builds
`cachedAsyncBuffer(asyncBufferFromUrl({ url, fetch }))` and hands that to
`parquetReadObjects`. `hyparquet` then issues a `HEAD` for the file size and `Range`
GETs for only the footer plus the row groups it needs.

- **Graceful fallback:** if an endpoint ignores `Range` and returns `200`, `hyparquet`
  buffers the whole file — correct, just without the bandwidth win.
- **Verified on tenant (HAR):** reading 200 rows of the 14.7 MB file fetched ~2.2 MB
  (~15%) over two `206` responses (footer + first row group). `SPHttpClient` forwards
  the `Range` header and surfaces `206`.

### D2 — Endpoint: direct file URL, not REST `$value` — *Implemented*

Files are addressed by their **direct download URL** (`{origin}{server-relative-path}`),
not `_api/web/getFileByServerRelativeUrl(...)/$value`.

- The direct file handler **honors `Range` (returns `206`)** on SharePoint Online;
  `$value` is less reliable.
- The direct URL is **not web-scoped**, so a web part on one site can read a file in
  another site collection.
- The endpoint is isolated in `ParquetViewerWebPart._resolveFileUrl` — the single place
  to switch if testing ever shows otherwise.

### D3 — Analytics: precompute summary statistics; do **not** scan full columns at query time — *Accepted*

A global statistic over 35M rows must touch every value of that column **once**. The only
question is *when* we pay that cost. We pay it **once at ingest**, not on every query in
the browser.

Store **sufficient statistics**, not final answers — a fixed recipe computed in a single
pass:

- **Per numeric column:** `count, sum, sumSq, min, max, nulls` → yields mean, variance,
  stddev for free.
- **Per numeric pair** we may regress/correlate: `n, sumX, sumY, sumXY, sumXX, sumYY`.
  With ~5 numeric columns (`id, units, unit_price, total, date`) that is ~10 pairs — store
  them all. A least-squares line is then
  `slope = (n·sumXY − sumX·sumY) / (n·sumXX − sumX²)`, `intercept = (sumY − slope·sumX)/n`.
- **Optional `byDimension`** breakdowns for **low-cardinality** columns only (`region` ×5,
  `channel` ×3). **Never** aggregate by high-cardinality `sku` (~1M distinct).
- **Numerical stability:** accumulate `sumSq`/`sumXY` centered on the mean (or with care in
  float64) so the line stays accurate at 35M rows.

Genuinely ad-hoc queries fall back to a ranged column scan using per-row-group min/max
statistics for predicate pushdown, or to D6.

### D4 — Storage: sidecar JSON **dataset manifest**, not Parquet footer metadata — *Accepted*

Each dataset gets **one JSON manifest** alongside its Parquet file, bundling the Parquet
pointer, the D3 statistics, and the D5 image list.

Chosen over embedding stats in the Parquet **footer key/value metadata** (which `hyparquet`
can read for free during the footer fetch) because:

- The manifest must also carry **image associations**, which do not belong in a Parquet
  footer.
- Stats/images can be **updated without rewriting the 821 MB Parquet**.
- **Trade-off accepted:** the manifest can desync from the Parquet. Mitigated because we
  **control all files** and regenerate the manifest whenever the Parquet is regenerated.

Manifest rules:

- **Relative paths.** `parquet` and `images[].path` resolve against the manifest's own URL,
  so a dataset = one self-contained, relocatable folder.
- Loaded with the **same authenticated `fetch` primitive** (D1); if absent, the viewer
  degrades gracefully to "no precomputed stats."

Example `demo.dataset.json`:

```json
{
  "name": "Q1 Sales",
  "parquet": "demo.parquet",
  "rows": 35495597,
  "stats": {
    "columns": { "unit_price": { "count": 35495597, "sum": 0, "sumSq": 0, "min": 5, "max": 100, "nulls": 0 } },
    "pairs":   { "unit_price~total": { "n": 0, "sumX": 0, "sumY": 0, "sumXY": 0, "sumXX": 0, "sumYY": 0 } },
    "byDimension": { "region": { "West": { "columns": {}, "pairs": {} } } }
  },
  "images": [
    { "path": "images/overview.png", "caption": "Revenue trend", "role": "overview" }
  ]
}
```

### D5 — Images: dataset-level gallery, listed in the manifest — *Accepted*

Images associate at the **dataset level** (a gallery for the whole dataset) and are listed
in `images[]`.

- Rendered with plain `<img>` tags. Because the page and images are **same-origin**, the
  browser's cookies authenticate them — **no `SPHttpClient` or `Range` needed**.
- **Lazy-load**; for many or large images, prefer SharePoint's thumbnail endpoint
  (`/_layouts/15/getpreview.ashx?path=…`) for cheap previews over full-resolution loads.
- **Out of scope (deferred):** per-high-cardinality-entity imagery (e.g. a photo per
  `sku`). That would not be enumerated in the manifest; it would use a URL convention
  (e.g. `images/sku/{sku}.jpg`) or a separate lookup.

### D6 — DuckDB-WASM considered, deferred — *Deferred*

`duckdb-wasm` would give full SQL with `httpfs` range reads and built-in `regr_slope`/
`regr_intercept`, with same-origin cookie auth likely flowing through its worker IO.

Deferred because: (a) it is a heavy WASM + worker payload in an SPFx bundle, and (b) it
**cannot make a global full-column statistic free** — a regression over all 35M
`unit_price` still downloads the whole column. It remains the preferred **future escape
hatch for open-ended ad-hoc exploration**; the D3/D4 precompute path handles the known
metrics far more cheaply.

## Consequences

**Positive**

- Analytics (means, stddev, best-fit lines, low-card breakdowns) are **instant and ~free**
  at query time — a few KB read, no column scans.
- Bandwidth stays bounded for both viewing (D1/D2) and analytics (D3/D4).
- A dataset is a **single, self-contained, relocatable folder** with one manifest entry
  point tying together data, stats, and imagery.

**Negative / risks**

- **Manifest sync discipline:** the JSON must be regenerated and uploaded with the Parquet.
- **Anticipated pairs only:** regression/correlation is limited to the numeric pairs whose
  cross-sums were precomputed.
- **Unanticipated ad-hoc filters** are not free — they fall back to ranged scans with
  min/max skipping, or to D6 later.
- Continued reliance on `SPHttpClient` forwarding `Range` and surfacing `206` (verified,
  but a platform behavior we don't own).

## Alternatives considered

- **Full-column scan in the browser at query time** — rejected: hundreds of MB downloaded
  plus 35M-value decode *per query*, defeating the ranged-read design.
- **Embed stats in the Parquet footer `kvMetadata`** — viable and desync-proof, but cannot
  carry images and requires rewriting the large Parquet to update; deferred in favor of D4.
- **Adopt DuckDB-WASM now** — deferred per D6.

## Implementation notes / next steps

1. `data/generate.js`: accumulate the D3 sufficient statistics in the **existing single
   pass** and emit `out/demo.dataset.json` (stats + an `images[]` section).
2. Bundle: a manifest loader (resolve relative paths via the D1 `fetch` primitive), a
   `stats.ts` that derives mean/stddev/best-fit line from sufficient statistics, and a
   dataset-level gallery component.
3. SharePoint layout: one folder per dataset (`demo.parquet`, `demo.dataset.json`,
   `images/…`); optionally a top-level `index.json` listing datasets for a picker.
