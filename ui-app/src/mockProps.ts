import type { ParquetViewerProps } from './mount';

// Stand-in for the props SPFx supplies at runtime. The dev harness fetches a
// sample file from ui-app/public/ with plain fetch(); SPFx supplies an
// authenticated SPHttpClient-backed fetchFile instead.
export const mockProps: ParquetViewerProps = {
  filePath: '/sample.parquet',
  fetchFile: async (path) => {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`fetch ${path} failed: ${res.status} ${res.statusText}`);
    return res.arrayBuffer();
  }
};
