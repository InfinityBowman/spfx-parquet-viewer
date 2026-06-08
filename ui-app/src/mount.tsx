import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { App } from './App';

// The single contract between SPFx and this app. The SPFx web part's render()
// calls mount(this.domElement, props); onDispose() calls unmount(this.domElement).
export interface ParquetViewerProps {
  /** Server-relative path to the .parquet file, e.g. "/sites/dev/Shared Documents/data.parquet". */
  filePath: string;
  /**
   * Authenticated, range-capable fetch primitive. hyparquet (inside this bundle)
   * calls it with `Range` headers to pull only the byte ranges it needs — the
   * footer plus the row groups for the requested rows — instead of the whole file.
   * The SPFx shell backs this with SPHttpClient and resolves the server-relative
   * path to an absolute URL; the Vite dev harness backs it with window.fetch.
   */
  fetchFile: typeof globalThis.fetch;
}

// SPFx calls render() repeatedly on the same element (property-pane edits,
// theme changes). Reuse one React root per element instead of recreating it.
const roots = new WeakMap<HTMLElement, Root>();

export function mount(el: HTMLElement, props: ParquetViewerProps): void {
  let root = roots.get(el);
  if (!root) {
    root = createRoot(el);
    roots.set(el, root);
  }
  root.render(
    <StrictMode>
      <App {...props} />
    </StrictMode>
  );
}

export function unmount(el: HTMLElement): void {
  const root = roots.get(el);
  if (root) {
    root.unmount();
    roots.delete(el);
  }
}
