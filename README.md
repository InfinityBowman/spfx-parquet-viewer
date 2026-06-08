# spfx-parquet-viewer

SPFx web part that reads parquet files from a SharePoint document library and renders them client-side with [hyparquet](https://github.com/hyparam/hyparquet).

## Architecture

Hybrid setup — a thin SPFx shell plus a modern Vite-built UI:

```
src/webparts/parquetViewer/
  ParquetViewerWebPart.ts   ← SPFx shell: property pane + SPHttpClient file access
  app/
    index.d.ts              ← hand-maintained types for the UI contract (committed)
    index.js                ← Vite lib build output (generated, gitignored)
ui/                         ← Vite + React 19 + Tailwind v4 + TypeScript (pnpm)
  src/lib.tsx               ← mount()/update()/unmount() entry — the contract
  src/App.tsx               ← parquet table viewer (hyparquet + compressors)
  src/main.tsx              ← standalone dev harness (plain fetch instead of SPHttpClient)
```

The shell is `--framework none`, so the UI is free of SPFx's React 17 pin — React 19 is fully bundled inside the Vite output. The contract between the two is `mount(el, props): handle`; if you change exports in `ui/src/lib.tsx`, update `app/index.d.ts` to match.

Heft copies `app/index.js` into `lib/` via `staticAssetsToCopy.includeGlobs` in `config/typescript.json`, then webpack bundles it into the web part bundle.

## Toolchains (two of them, deliberately)

| Where | Node | Package manager | Why |
|---|---|---|---|
| root (SPFx) | **22 only** (`.nvmrc`) | npm | SPFx 1.23 hard-requires Node 22; Heft expects flat node_modules |
| `ui/` | any modern | pnpm | normal Vite project rules |

The SPFx toolchain (`heft`, `yo`, `@microsoft/generator-sharepoint`) is installed globally **under nvm's Node 22**, not Node 24. Run `nvm use` in the project root first.

## Dev loops

**Fast UI iteration (no SharePoint needed):**
```sh
cd ui && pnpm dev        # vite dev server + HMR, fetches /sample.parquet
```
Drop a test file at `ui/public/sample.parquet`.

**Against the real SharePoint workbench:**
```sh
# one-time: trust the dev cert
heft trust-dev-cert

# runs `pnpm watch` (ui) + `heft start` (spfx) together via concurrently;
# opens the hosted workbench — tenant pinned in config/serve.json
nvm use && npm start
```

**Package for deployment** (rebuilds the UI bundle first):
```sh
nvm use && npm run build
# → sharepoint/solution/spfx-parquet-viewer.sppkg
```
Upload the `.sppkg` to your tenant App Catalog (create one under SharePoint admin center → More features → Apps), add the app to a site, then add the "ParquetViewer" web part to a page and set the parquet file path in its property pane.

## Demo data

```sh
cd data && pnpm generate          # 1000 rows
cd data && pnpm generate 50000    # row count
cd data && pnpm generate 2gb      # size target → ~enough rows for a 2 GiB CSV (also accepts mb/kb)
```
Writes `data/out/demo.csv` + `data/out/demo.parquet` (snappy, via hyparquet-writer) and refreshes `ui/public/sample.parquet` for the dev harness. Both files are **streamed** (row-group-at-a-time parquet + a streamed CSV), so size is bounded by disk, not memory — a 2 GB CSV doesn't need a 2 GB string. The parquet is written in many 100k-row row groups, which is what lets ranged reads skip bytes. Deterministic (seeded), so regenerating produces identical files. Each run prints the csv→parquet compression ratio. Upload `demo.parquet` to a SharePoint doc library and point the web part at it.

## Notes

- `ui/src/index.css` imports Tailwind **without preflight** — global resets would corrupt the host SharePoint page.
- `hyparquet-compressors` covers all parquet codecs (snappy/gzip/zstd/...). If you standardize on one codec, import just that compressor to shrink the ~960KB UI bundle.
- The viewer uses **ranged (partial) reads** and shows the first 200 rows. The UI contract is `openFile(path): Promise<AsyncBuffer>` (see `ui/src/types.ts`): an initial 1-byte probe learns the file size, then `slice()` issues HTTP `Range` requests, so hyparquet downloads only the footer + needed column chunks instead of the whole file. The SPFx shell implements this with `SPHttpClient` against the `$value` endpoint; the Vite dev harness with `fetch()` (Vite serves `206 Partial Content`, so a big `sample.parquet` exercises the path locally — watch the Network tab).
