// Hand-written declaration for the Vite-built bundle (explorer.js). Kept in sync
// with ui-app/src/mount.tsx's exports. Webpack resolves the .js at bundle time;
// TypeScript uses this for types. Not emptied by the Vite build.
export interface ParquetViewerProps {
  /** Server-relative path to the .parquet file. */
  filePath: string;
  /** Fetches the raw bytes of a file (SPFx: authenticated SPHttpClient; dev: fetch). */
  fetchFile: (path: string) => Promise<ArrayBuffer>;
}

export declare function mount(el: HTMLElement, props: ParquetViewerProps): void;
export declare function unmount(el: HTMLElement): void;
