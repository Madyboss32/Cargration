const fs = require('fs')
const path = require('path')
const base = path.join(__dirname, '..', 'app', '(site)', '[lang]')
function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)],
  )
}
const rows = []
for (const f of walk(base)) {
  if (!f.endsWith('page.tsx')) continue
  const c = fs.readFileSync(f, 'utf8')
  const rel = path.relative(base, path.dirname(f))
  rows.push({
    page: rel === '.' ? '(home)' : rel,
    meta: /generateMetadata|export const metadata/.test(c),
    og: /openGraph/.test(c),
    ld: /ld\+json/.test(c),
  })
}
rows.sort((a, b) => a.page.localeCompare(b.page))
for (const r of rows) {
  console.log(
    r.page.padEnd(18),
    'metadata:', r.meta ? 'YES' : '--',
    '| openGraph:', r.og ? 'YES' : '--',
    '| JSON-LD:', r.ld ? 'YES' : '--',
  )
}
