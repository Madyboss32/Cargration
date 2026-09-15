const fs = require('fs')
const yauzl = require('yauzl')
const iconv = require('iconv-lite')

const ZIP = process.argv[2] || 'C:/Users/marketing/Desktop/car_data_export.zip'
const TARGET = 'car_data_export/images/大众/大众途岳/car_000000/image_01.webp'

const names = [] // collected decoded candidates

yauzl.open(ZIP, { lazyEntries: true }, (err, zipfile) => {
  if (err) { console.error('open err', err.message); process.exit(1) }
  zipfile.readEntry()
  zipfile.on('entry', (entry) => {
    const raw = Buffer.from(entry.fileName, 'latin1')
    const asUtf8 = raw.toString('utf8')
    const asGbk = iconv.decode(raw, 'gbk')
    names.push({ raw, asUtf8, asGbk })
    if (names.length <= 6) {
      console.log('--- entry ---')
      console.log('hex:', raw.toString('hex').slice(0, 80))
      console.log('utf8:', asUtf8)
      console.log('gbk :', asGbk)
    }
    zipfile.readEntry()
  })
  zipfile.on('error', (e) => { console.error('zip err', e.message); process.exit(1) })
  zipfile.on('end', () => {
    const utf8Hit = names.some((n) => n.asUtf8 === TARGET || n.asUtf8.startsWith('car_data_export/images/大众/大众途岳/'))
    const gbkHit = names.some((n) => n.asGbk === TARGET || n.asGbk.startsWith('car_data_export/images/大众/大众途岳/'))
    console.log('UTF8-decode hit for 大众/大众途岳 folder:', utf8Hit)
    console.log('GBK-decode hit for 大众/大众途岳 folder:', gbkHit)
    const u8folders = names.filter((n) => n.asUtf8.startsWith('car_data_export/images/')).slice(0, 8).map((n) => n.asUtf8)
    console.log('sample utf8 dirs:', JSON.stringify(u8folders))
  })
})