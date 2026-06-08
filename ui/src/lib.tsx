import { StrictMode } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import App from './App'
import './index.css'
import type { ParquetAppProps, AsyncBuffer } from './types'

export type { ParquetAppProps, AsyncBuffer }

/**
 * The contract between SPFx and this app. The SPFx web part's render() calls
 * mount(this.domElement, props); onDispose() calls unmount(this.domElement).
 * Keep this in sync with ../src/webparts/parquetViewer/app/index.d.ts.
 *
 * SPFx calls render() repeatedly on the same element (property-pane edits, theme
 * changes). Reuse one React root per element instead of recreating it.
 */
const roots = new WeakMap<HTMLElement, Root>()

export function mount(el: HTMLElement, props: ParquetAppProps): void {
  let root = roots.get(el)
  if (!root) {
    root = createRoot(el)
    roots.set(el, root)
  }
  root.render(
    <StrictMode>
      <App {...props} />
    </StrictMode>,
  )
}

export function unmount(el: HTMLElement): void {
  const root = roots.get(el)
  if (root) {
    root.unmount()
    roots.delete(el)
  }
}
