import Redis from 'ioredis'

const r = new Redis('redis://localhost:6399', {
  lazyConnect: false,
  maxRetriesPerRequest: 1,
  connectTimeout: 3000,
  enableOfflineQueue: false,
})
r.on('error', (e) => console.log('error event:', e.message.slice(0, 80)))
r.on('ready', () => console.log('ready fired'))
try { await r.set('t:1', 'hello', 'EX', 60); console.log('SET ok') } catch (e) { console.log('SET failed:', e.message.slice(0, 100)) }
console.log('GET ->', await r.get('t:1'))
r.disconnect()
