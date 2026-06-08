import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { App } from './App';

// The single contract between SPFx and this app. The SPFx web part's render()
// calls mount(this.domElement, props); onDispose() calls unmount(this.domElement).
export interface ParquetViewerProps {
  /** Server-relative path to the .parquet file, e.g. "/sites/dev/Shared Documents/data.parquet". */
  filePath: string;
  /**
   * Fetches the raw bytes of a file. The SPFx shell implements this with
   * SPHttpClient (authenticated); the Vite dev harness implements it with fetch().
   */
  fetchFile: (path: string) => Promise<ArrayBuffer>;
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
