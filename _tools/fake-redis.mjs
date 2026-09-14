import net from 'net'

const PORT = parseInt(process.argv[2] || '6399', 10)
const store = new Map()
let gets = 0, sets = 0

net.createServer((sock) => {
  sock.on('error', () => { try { sock.destroy() } catch {} })
  let buf = Buffer.alloc(0)
  sock.on('data', (d) => {
    buf = Buffer.concat([buf, d])
    for (;;) {
      const r = parse(buf)
      if (!r) break
      buf = r.rest
      reply(r.args)
    }
  })
  function parse(b) {
    let idx = b.indexOf('\r\n')
    if (idx < 0) return null
    let args
    if (b[0] === 0x2a) {
      const n = parseInt(b.slice(1, idx).toString(), 10)
      let pos = idx + 2
      args = []
      for (let k = 0; k < n; k++) {
        if (b[pos] !== 0x24) return null
        const lenEnd = b.indexOf('\r\n', pos)
        if (lenEnd < 0) return null
        const len = parseInt(b.slice(pos + 1, lenEnd).toString(), 10)
        if (b.length < lenEnd + 2 + len + 2) return null
        args.push(b.slice(lenEnd + 2, lenEnd + 2 + len).toString())
        pos = lenEnd + 2 + len + 2
      }
      return { args, rest: b.slice(pos) }
    }
    args = b.slice(0, idx).toString().split(' ').filter(Boolean)
    return { args, rest: b.slice(idx + 2) }
  }
  function reply(args) {
    try {
      const cmd = (args[0] || '').toUpperCase()
      if (cmd === 'SET') { store.set(args[1], args[2]); sets++; sock.write('+OK\r\n') }
      else if (cmd === 'GET') {
        const v = store.get(args[1])
        gets++
        if (v === undefined) sock.write('$-1\r\n')
        else sock.write(`$${Buffer.byteLength(v)}\r\n${v}\r\n`)
      } else if (cmd === 'EXISTS') {
        sock.write(`:${store.has(args[1]) ? 1 : 0}\r\n`)
      } else sock.write('+OK\r\n')
    } catch {}
  }
}).listen(PORT, () => console.log(`fake-redis on :${PORT}`))

process.on('SIGINT', () => { console.log(`stats gets=${gets} sets=${sets} keys=${store.size} bytes=${[...store.values()].reduce((a, v) => a + v.length, 0)}`); process.exit(0) })
