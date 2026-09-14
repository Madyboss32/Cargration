// Static-export build wrapper.
// This site prerenders ~125K pages (every car across 6 locales), so a plain
// `next build` can exhaust the default Node heap and crash workers part-way
// through page generation. This wrapper:
//   1. clears stale build output (.next, out), and
//   2. raises the Node heap for the spawned `next build`.
// Cross-platform (no shell-specific env syntax required).
import { rmSync, existsSync } from 'node:fs'
import { spawn } from 'node:child_process'

const root = process.cwd()

for (const dir of ['.next', 'out']) {
  const p = `${root}/${dir}`
  if (existsSync(p)) {
    rmSync(p, { recursive: true, force: true })
    console.log(`cleaned ${dir}/`)
  }
}

const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    CARGRATION_USE_LOCAL_CATALOG: '1',
    NODE_OPTIONS: `${process.env.NODE_OPTIONS || ''} --max-old-space-size=8192`.trim(),
  },
})

child.on('exit', (code) => {
  process.exit(code ?? 1)
})
