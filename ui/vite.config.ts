import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// Lib build outputs a single self-contained ESM file (CSS inlined into the JS)
// directly into the SPFx shell's source tree. The shell imports `mount()` from it
// and SPFx's webpack bundles it into the web part bundle.
export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
  // Lib mode does NOT substitute process.env.NODE_ENV the way an app build does,
  // so React's `process.env.NODE_ENV` checks survive as bare references and throw
  // "process is not defined" in SPFx (no process global). Replace with a literal.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    // es2020 (not the reference's es2019): hyparquet uses BigInt literals (8n),
    // which only exist from es2020. The default (esnext) can emit syntax the SPFx
    // loader chokes on, so we pin to the lowest target that still supports BigInt.
    target: 'es2020',
    cssCodeSplit: false,
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
