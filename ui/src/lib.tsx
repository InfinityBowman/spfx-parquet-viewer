import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import type { ParquetAppProps, ParquetAppHandle } from './types'

export type { ParquetAppProps, ParquetAppHandle }

/**
 * Entry point consumed by the SPFx shell web part.
 * Keep this contract in sync with ../src/webparts/parquetViewer/app/index.d.ts
 */
export function mount(el: HTMLElement, props: ParquetAppProps): ParquetAppHandle {
  const root = createRoot(el)
  root.render(<App {...props} />)
  return {
    update(next: ParquetAppProps) {
      root.render(<App {...next} />)
    },
    unmount() {
      root.unmount()
    },
  }
}
