import type { ParquetViewerProps } from './mount';

// Stand-in for the props SPFx supplies at runtime. The dev harness serves the
// sample file from ui-app/public/ via Vite, whose static server honors Range
// requests — so this path exercises the real 206/ranged-read flow. SPFx supplies
// an authenticated SPHttpClient-backed fetch instead.
export const mockProps: ParquetViewerProps = {
  filePath: '/sample.parquet',
  fetchFile: (input, init) => fetch(input, init)
};
