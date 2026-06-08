import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Dev (`vite`) serves index.html as a standalone harness.
// Build (`vite build`) emits a single self-contained library bundle that the
// SPFx web part imports in phase 2. React is bundled in, not externalized,
// so the SPFx side needs no React of its own.
export default defineConfig({
  plugins: [react()],
  // Library mode does not substitute process.env.NODE_ENV the way an app build
  // does, so React's references would survive and throw "process is not defined"
  // in the browser (SPFx has no process global). Replace it with a literal.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    // es2020 (not es2019): hyparquet uses BigInt literals (8n), which require es2020.
    target: 'es2020',
    outDir: resolve(import.meta.dirname, '../src/webparts/parquetViewer/vendor/explorer'),
    // false so the hand-written explorer.d.ts colocated with the output survives rebuilds.
    emptyOutDir: false,
    // Don't copy ui-app/public/* (the dev-harness sample.parquet) into the SPFx
    // source tree — outDir is build output, not an asset folder.
    copyPublicDir: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/mount.tsx'),
      formats: ['es'],
      fileName: () => 'explorer.js'
    },
    rollupOptions: {
      output: { assetFileNames: 'explorer.[ext]' }
    }
  }
});
