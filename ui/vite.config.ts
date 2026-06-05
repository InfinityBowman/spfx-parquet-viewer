import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// Lib build outputs a single self-contained ESM file (CSS inlined into the JS)
// directly into the SPFx shell's source tree. The shell imports `mount()` from it
// and SPFx's webpack bundles it into the web part bundle.
export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/lib.tsx',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    outDir: '../src/webparts/parquetViewer/app',
    // Don't wipe the outDir — it holds the hand-maintained index.d.ts
    emptyOutDir: false,
  },
})
