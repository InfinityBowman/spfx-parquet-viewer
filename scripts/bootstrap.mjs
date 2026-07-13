// One-shot setup for a fresh clone: root npm deps (SPFx/Heft), ui-app + data
// pnpm deps, and a sample parquet for the dev harness. Idempotent — re-running
// just refreshes installs and skips the sample if it already exists.
//
//   nvm use && npm run bootstrap
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

function fail(msg) {
  console.error(`\n✖ ${msg}`)
  process.exit(1)
}

function run(cmd, args, cwd) {
  console.log(`\n▸ ${cmd} ${args.join(' ')}  (in ${cwd === root ? '.' : cwd.slice(root.length)})`)
  const r = spawnSync(cmd, args, { cwd, stdio: 'inherit' })
  if (r.error) fail(`could not run ${cmd}: ${r.error.message}`)
  if (r.status !== 0) fail(`${cmd} ${args.join(' ')} failed (exit ${r.status})`)
}

// SPFx 1.23 / Heft hard-require Node 22 (see package.json engines + .nvmrc).
const major = Number(process.versions.node.split('.')[0])
if (major !== 22) {
  fail(`running Node ${process.versions.node}, but the SPFx toolchain needs Node 22 — run \`nvm use\` first`)
}

// ui-app/ and data/ are pnpm projects (the root stays npm — Heft wants flat
// node_modules), but npm works there too, so fall back rather than block
// contributors who don't have pnpm.
const hasPnpm = spawnSync('pnpm', ['--version'], { stdio: 'ignore' }).status === 0
const pm = hasPnpm ? 'pnpm' : 'npm'
if (!hasPnpm) {
  console.log('▸ pnpm not found — using npm for ui-app/ and data/ (works fine; pnpm is just the default here)')
}

run('npm', ['install'], root)
run(pm, ['install'], join(root, 'ui-app'))
run(pm, ['install'], join(root, 'data'))

const sample = join(root, 'ui-app', 'public', 'sample.parquet')
if (existsSync(sample)) {
  console.log('\n▸ ui-app/public/sample.parquet already exists — skipping demo-data generation')
} else {
  run(pm, ['run', 'generate'], join(root, 'data'))
}

console.log(`
✓ Bootstrap complete. Next steps:

  cd ui-app && ${pm} run dev  # standalone UI dev with HMR (no SharePoint needed)
  npx heft trust-dev-cert     # one-time, before first workbench run
  npm start                   # hosted workbench (Node 22; serves the committed UI bundle)
`)
