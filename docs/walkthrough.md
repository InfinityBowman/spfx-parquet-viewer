# How this project works

*A walkthrough for someone new to the codebase.*

The one-sentence version: **this is a SharePoint web part that displays Parquet data files as a nice table, without ever downloading the whole file** — it reads only the bytes it needs, directly in the browser.

## The problem it solves

Parquet is a columnar data format (think "compressed spreadsheet for big data"). People store these files in SharePoint document libraries, but SharePoint can't display them. This project adds a web part — a widget you drop onto a SharePoint page — that renders a Parquet file as a formatted table.

The catch is that these files can be huge (the reference dataset is an 821 MB Parquet with 35M rows), so downloading the whole file to display 200 rows is a non-starter. The whole design flows from that constraint.

## The two-halves architecture

The repo is really two projects glued together, and this split is the most important thing to understand.

### 1. The SPFx shell — `src/webparts/parquetViewer/ParquetViewerWebPart.ts`

SPFx is Microsoft's framework for building SharePoint widgets, and it's restrictive: old toolchain, pinned to React 17, Node 22 only. So the shell is kept deliberately tiny (~100 lines). It does exactly three things:

- Shows a **property pane** where a page author types the parquet file path.
- Provides an **authenticated `fetch` function** backed by SharePoint's `SPHttpClient`, so requests carry the user's credentials.
- Calls `mount(domElement, { filePath, fetchFile })` on the real UI, and `unmount()` on dispose.

### 2. The Vite UI app — `ui-app/`

A completely normal, modern **React 19 + Tailwind v4 + TypeScript** project (pnpm, Vite). All rendering and Parquet logic lives here. Vite compiles it into a single self-contained JS bundle that gets copied into the SPFx build as a vendored file.

Because the shell is registered as `--framework none`, this bundle can use React 19 even though SPFx itself is stuck on React 17 — the two React versions never meet.

### The seam

The **contract between the two halves** is just two functions in `ui-app/src/mount.tsx`:

```ts
mount(el: HTMLElement, props: { filePath: string; fetchFile: typeof fetch }): void
unmount(el: HTMLElement): void
```

The shell hands over a DOM element, a file path, and a fetch function; the UI does everything else. On the SPFx side, the shell imports these from the vendored bundle (`src/webparts/parquetViewer/vendor/explorer/`), whose hand-maintained `explorer.d.ts` mirrors `mount.tsx`'s exports — change one, update the other.

This split also means the UI can be developed standalone with `pnpm dev` against a local `sample.parquet` — no SharePoint needed for day-to-day iteration (`ui-app/src/dev.tsx` is the standalone harness, backing `fetchFile` with plain `window.fetch`).

## How it reads a huge file without downloading it

This is the clever part, in `ui-app/src/App.tsx`. Parquet files have their index (the "footer") at the *end* of the file, and data is grouped into independent chunks ("row groups"). The [hyparquet](https://github.com/hyparam/hyparquet) library exploits this:

1. A `HEAD` request learns the file's total size (with a 1-byte `Range` GET as fallback).
2. An HTTP `Range` request grabs just the footer → now it knows where every row group lives.
3. More `Range` requests fetch only the row groups needed for the first 200 rows.

SharePoint's direct file URLs honor `Range` headers and return `206 Partial Content` — verified against a real tenant, where reading 200 rows of a 14.7 MB file transferred ~2.2 MB (~15%). The shell's `fetchFile` just forwards hyparquet's `Range` headers through `SPHttpClient` so the requests are authenticated. If an endpoint ever ignores `Range` and sends the whole file (`200`), hyparquet falls back gracefully — correct, just without the bandwidth win.

Two endpoint details worth knowing (see ADR-0001, decisions D1/D2):

- Files are addressed by their **direct download URL** (`{origin}{server-relative-path}`), not the REST `_api/...$value` endpoint — the direct handler honors `Range` more reliably and isn't scoped to the current site.
- The endpoint choice is isolated in `ParquetViewerWebPart._resolveFileUrl`, the single place to change if testing ever shows otherwise.

Once the rows arrive, `App.tsx` does presentation-level type inference: numeric columns right-align with number formatting, column names like "price"/"total" get currency formatting, low-cardinality string columns render as colored category pills, booleans as yes/no dots.

## The supporting cast

- **`data/generate.js`** — generates deterministic demo data at any size (`pnpm generate 2gb`). Output is streamed, so multi-GB files don't need multi-GB memory, and the parquet is written in 100k-row row groups specifically so ranged reads have something to skip. Also refreshes `ui-app/public/sample.parquet` for the dev harness.
- **`docs/adr/0001-data-access-and-analytics.md`** — the design record. The ranged-read transport (D1/D2) is implemented; the next accepted-but-unbuilt phase (D3–D5) is analytics via precomputed statistics in a sidecar JSON manifest, plus a per-dataset image gallery.

## Build and deploy flow

```
ui-app (Vite build) ──► vendored bundle ──► SPFx/Heft build ──► webpack ──► .sppkg
```

Two steps, run separately:

1. `cd ui-app && pnpm build` compiles the UI into `src/webparts/parquetViewer/vendor/explorer/explorer.js` (a committed, vendored file). This does **not** happen automatically — rerun it whenever the UI changes.
2. `nvm use && npm run build` at the root runs the SPFx/Heft build: the rig's built-in `copy-javascript` task copies every `.js` under `src/` (including the vendored bundle) into `lib/`, webpack bundles it, and the result is packaged into `sharepoint/solution/spfx-parquet-viewer.sppkg`.

That `.sppkg` gets uploaded to a tenant's **App Catalog**; the app is then added to a site, the web part added to a page, and the author sets the parquet file path in the property pane.

For local dev against the hosted workbench: rebuild the UI bundle if it changed (`cd ui-app && pnpm build`), then `nvm use && npm start` runs `heft start` and opens the workbench.

## Toolchain gotcha

There are deliberately **two toolchains**: the repo root is npm on Node 22 (SPFx 1.23 hard-requires it — run `nvm use` first), while `ui-app/` is pnpm on any modern Node. Don't mix them.
