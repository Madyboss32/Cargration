import Redis from 'ioredis'

const r = new Redis(process.env.REDIS_URL || 'redis://localhost:6399', { lazyConnect: false })
const v = await r.get('cargration:catalog:v3')
if (!v) { console.log('KEY NOT FOUND'); process.exit(1) }
const parsed = JSON.parse(v)
console.log('key present | bytes:', v.length, '| cars:', parsed.length, '| sample:', parsed[0]?.id, parsed[0]?.img?.[0]?.slice(-30))
r.disconnect()
