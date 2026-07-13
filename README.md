# spfx-parquet-viewer

SPFx web part that reads parquet files from a SharePoint document library and renders them client-side with [hyparquet](https://github.com/hyparam/hyparquet).

New to the codebase? Start with [docs/walkthrough.md](docs/walkthrough.md); design decisions live in [docs/adr/](docs/adr/).

## Architecture

Hybrid setup — a thin SPFx shell plus a modern Vite-built UI:

```
src/webparts/parquetViewer/
  ParquetViewerWebPart.ts   ← SPFx shell: property pane + SPHttpClient file access
  vendor/explorer/
    explorer.d.ts           ← hand-maintained types for the UI contract
    explorer.js             ← Vite lib build output (committed)
ui-app/                     ← Vite + React 19 + Tailwind v4 + TypeScript (pnpm)
  src/mount.tsx             ← mount()/unmount() entry — the contract
  src/App.tsx               ← parquet table viewer (hyparquet + compressors)
  src/dev.tsx               ← standalone dev harness (plain fetch instead of SPHttpClient)
```

The shell is `--framework none`, so the UI is free of SPFx's React 17 pin — React 19 is fully bundled inside the Vite output. The contract between the two is `mount(el, props)` / `unmount(el)`; if you change exports in `ui-app/src/mount.tsx`, update `vendor/explorer/explorer.d.ts` to match.

`cd ui-app && pnpm build` writes `explorer.js` into `vendor/explorer/`. At SPFx build time the rig's built-in `copy-javascript` Heft task copies every `.js` under `src/` into `lib/`, and webpack bundles it into the web part bundle.

## Toolchains (two of them, deliberately)

| Where | Node | Package manager | Why |
|---|---|---|---|
| root (SPFx) | **22 only** (`.nvmrc`) | npm | SPFx 1.23 hard-requires Node 22; Heft expects flat node_modules |
| `ui-app/`, `data/` | any modern | pnpm (npm works too) | normal Vite project rules |

The SPFx toolchain (`heft`, `yo`, `@microsoft/generator-sharepoint`) is installed globally **under nvm's Node 22**, not Node 24. Run `nvm use` in the project root first.

## Setup

```sh
nvm use && npm run bootstrap
```

One command for a fresh clone: installs root, `ui-app/`, and `data/` dependencies, and generates `ui-app/public/sample.parquet` for the dev harness. Idempotent — safe to re-run. Requires Node 22 (`nvm use`); uses pnpm for `ui-app/`/`data/` when available and falls back to npm when it isn't (both lockfiles are committed), so pnpm is preferred but not required. Anywhere the docs say `pnpm <script>`, `npm run <script>` works too.

## Dev loops

**Fast UI iteration (no SharePoint needed):**
```sh
cd ui-app && pnpm dev    # vite dev server + HMR, fetches /sample.parquet
```
Generate a test file with `cd data && pnpm generate` (writes `ui-app/public/sample.parquet`), or drop one there yourself.

**Against the real SharePoint workbench:**
```sh
# one-time: trust the dev cert (local heft from devDependencies)
npx heft trust-dev-cert

cd ui-app && pnpm build  # refresh the vendored UI bundle (no watch — rerun after UI changes)
nvm use && npm start     # heft start; opens the hosted workbench — tenant pinned in config/serve.json
```

**Package for deployment:**
```sh
cd ui-app && pnpm build  # if the UI changed since the last build
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
Writes `data/out/demo.csv` + `data/out/demo.parquet` (snappy, via hyparquet-writer) and refreshes `ui-app/public/sample.parquet` for the dev harness (skipped when the parquet exceeds 100 MiB — the dev server shouldn't serve gigabytes). Both files are **streamed** (row-group-at-a-time parquet + a streamed CSV), so size is bounded by disk, not memory — a 2 GB CSV doesn't need a 2 GB string. The parquet is written in many 100k-row row groups, which is what lets ranged reads skip bytes. Deterministic (seeded), so regenerating produces identical files. Each run prints the csv→parquet compression ratio. Upload `demo.parquet` to a SharePoint doc library and point the web part at it.

## Notes

- The UI's compiled Tailwind CSS is injected as a `<style>` tag at runtime (the Vite lib build's separate `explorer.css` is never loaded by SPFx) — see `ui-app/src/index.css`.
- `hyparquet-compressors` covers all parquet codecs (snappy/gzip/zstd/...). If you standardize on one codec, import just that compressor to shrink the ~540KB UI bundle.
- The viewer uses **ranged (partial) reads** and shows the first 200 rows. The UI contract is a fetch primitive (`fetchFile: typeof fetch`, see `ui-app/src/mount.tsx`): hyparquet issues a `HEAD` request for the file size (falling back to a 1-byte `Range` GET), then `Range` GETs for only the footer + needed column chunks instead of the whole file. The SPFx shell backs this with `SPHttpClient` against the **direct file URL** (not `_api/...$value` — see ADR-0001 D2); the Vite dev harness with `window.fetch` (Vite serves `206 Partial Content`, so a big `sample.parquet` exercises the path locally — watch the Network tab).
