const fs = require('fs')
function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(d + '/' + e.name) : [d + '/' + e.name],
  )
}
const files = walk('src').filter((f) => /\.tsx$/.test(f))
let hits = 0
for (const f of files) {
  const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/)
  lines.forEach((l, i) => {
    if (/t\(|\/\/|import |className|style=/.test(l)) return
    const m = l.match(/>\s*([A-Z][A-Za-z0-9 ,.&'%$!()-]{5,})\s*</)
    if (m && !/[{}]/.test(l)) {
      console.log(f.replace(/\\/g, '/') + ':' + (i + 1) + ': "' + m[1] + '"')
      hits++
    }
  })
}
console.log('--- total hardcoded JSX text:', hits)
