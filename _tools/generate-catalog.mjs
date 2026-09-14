import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CSV = path.join(ROOT, '_tools', 'car_data', 'listings_english.csv')
const OUT_CATALOG = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const OUT_MANIFEST = path.join(ROOT, '_tools', 'car_data', 'image-manifest.json')
const OUT_REPORT = path.join(ROOT, '_tools', 'car_data', 'generate-report.txt')
const PREV_CATALOG = path.join(ROOT, '_tools', 'car_data', 'cars.generated.eauto-backup.json')
const IMG_CDN = 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev/cars'

const FX = 7.2

const COLOR_MAP = {
  白: 'White', 黑: 'Black', 灰: 'Gray', 银: 'Silver', 蓝: 'Blue', 红: 'Red',
  绿: 'Green', 金: 'Gold', 棕: 'Brown', 黄: 'Yellow', 橙: 'Orange',
  紫: 'Purple', 粉: 'Pink', 蓝白: 'Blue',
}

const CN_BRAND = {
  奔驰: 'Mercedes-Benz', 宝马: 'BMW', 奥迪: 'Audi', 马自达: 'Mazda',
  丰田: 'Toyota', 本田: 'Honda', 日产: 'Nissan', 大众: 'Volkswagen',
  林肯: 'Lincoln', 凯迪拉克: 'Cadillac', 别克: 'Buick', 雪弗莱: 'Chevrolet',
  雪佛兰: 'Chevrolet', 福特: 'Ford', 特斯拉: 'Tesla', 保时捷: 'Porsche',
  雷克萨斯: 'Lexus', 英菲尼迪: 'Infiniti', 讴歌: 'Acura', 斯巴鲁: 'Subaru',
  三菱: 'Mitsubishi', 现代: 'Hyundai', 起亚: 'Kia', 捷豹: 'Jaguar',
  路虎: 'Land Rover', 沃尔沃: 'Volvo', 菲亚特: 'Fiat',
}

function deriveBrandFromTitle(title) {
  for (const cn of Object.keys(CN_BRAND)) if (String(title).includes(cn)) return CN_BRAND[cn]
  return 'Unknown'
}

function deriveModelFromTitle(title, brand) {
  const rest = String(title).replace(/（[^）]*）|[\u4e00-\u9fa5]|\s*Used Car\s*$/gi, '').trim()
  const m = rest.match(/^[A-Za-z0-9][A-Za-z0-9 \-]*/)
  return m ? m[0].trim() : ''
}

const NOISE = ['参数', '厂商', '方式', '上市', '时间', '能源', '查看', '完整', '汽油']

function parseCsv(text) {
  const rows = []
  const n = text.length
  let i = 0
  while (i < n) {
    let line = ''
    while (i < n && text[i] !== '\r' && text[i] !== '\n') {
      line += text[i]
      i++
    }
    if (i < n && text[i] === '\r') i++
    if (i < n && text[i] === '\n') i++
    const fields = parseCsvLine(line)
    if (fields.some((f) => f !== '')) rows.push(fields)
  }
  return rows
}

function parseCsvLine(line) {
  const out = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQ) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++ } else inQ = false
      } else cur += ch
    } else if (ch === '"') {
      inQ = true
    } else if (ch === ',') {
      out.push(cur); cur = ''
    } else {
      cur += ch
    }
  }
  out.push(cur)
  return out
}

function parseWan(s) {
  if (!s) return NaN
  const m = String(s).match(/([\d.]+)\s*万/)
  if (m) return parseFloat(m[1]) * 10000
  const num = parseFloat(String(s))
  return Number.isFinite(num) ? num : NaN
}

function cleanFeatures(features) {
  if (!features) return []
  let arr = []
  try {
    arr = JSON.parse(features.replaceAll('""', '"'))
  } catch {
    arr = features.split(',').map((x) => x.trim()).filter(Boolean)
  }
  if (!Array.isArray(arr)) return []
  const seen = new Set()
  const out = []
  for (const raw of arr) {
    const v = String(raw).trim().replace(/"$/, '')
    if (!v) continue
    if (NOISE.some((k) => v.includes(k))) continue
    if (seen.has(v)) continue
    seen.add(v)
    out.push(v)
    if (out.length >= 12) break
  }
  return out
}

function inferFuel(rawFuel, blob) {
  const q = String(blob || '').toLowerCase()
  if (q.includes('插电') || q.includes('插混') || q.includes('dm-i') || q.includes('dmi') || q.includes('dm-p')) return 'Plug-in Hybrid'
  if (q.includes('增程')) return 'REEV'
  if (q.includes('混动')) return 'Hybrid'
  const f = String(rawFuel || '').trim().toLowerCase()
  if (f.includes('electric') || f === 'ev') return 'Electric'
  if (f.includes('diesel')) return 'Diesel'
  if (f.includes('hybrid')) return 'Hybrid'
  if (f.includes('plug')) return 'Plug-in Hybrid'
  if (q.includes('电动') || q.includes('纯电') || q.includes('新能源')) return 'Electric'
  if (q.includes('汽油') || q.includes('柴油')) return q.includes('柴油') ? 'Diesel' : 'Petrol'
  return 'Petrol'
}

function inferType(fuel, blob) {
  if (fuel === 'Electric') return 'ev'
  const q = String(blob || '').toLowerCase()
  if (/皮卡|pickup/.test(q)) return 'pickup'
  if (/mpv|商务车|gl8|奥德赛|艾力绅|m8|gm\d|ge\d|hq9|d9|赛那|sienna|库斯途|custin|\bnv\d\b/.test(q)) return 'mpv'
  if (/\bvan\b|面包|五菱宏光|五菱荣光|特顺|金杯|naza/.test(q)) return 'van'
  if (/hatchback|两厢|高尔夫|polo|飞度|致炫|骐达|minicooper|嘉年华/.test(q)) return 'hatchback'
  if (/suv|cuv|越野|途观|途昂|途岳|途胜|探岳|探歌|探界者|探险者|昂科威|昂科旗|昂科拉|汉兰达|rav4|cruiser|cr-v|\bcrv\b|皓影|威兰达|冠道|\bur-v\b|奇骏|逍客|劲客|cx-5|cx50|cx-4|途铠|揽胜|揽运|卫士|发现|牧马人|坦克|理想|极氪|岚图|问界|仰望|方程豹|捷途|瑞虎|星越|缤越|博越|豪越|宋|唐\b|元plus|山海|猛士|bj\d|h6|cs\d|大狗|普拉多|陆巡|glc|gle|gls|glb|gla|q[2-7][a-z0-9]*|x[1-6][a-z0-9]*|xc\d|eletre|es\d|et\d|ec\d|el\d|levante|x5\b|x6\b|x1\b|x3\b/.test(q)) return 'suv'
  return 'sedan'
}

function cleanColor(raw) {
  const v = String(raw || '').trim()
  const m = v.match(/[\u4e00-\u9fa5]+/)
  if (m) {
    const hit = Object.keys(COLOR_MAP).find((k) => v.includes(k))
    if (hit) return COLOR_MAP[hit]
    return m[0]
  }
  return v || 'Other'
}

function cleanTitle(t) {
  return String(t || '').replace(/\s*Used Car\s*$/, '').trim()
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

async function main() {
  const text = fs.readFileSync(CSV, 'utf8').replace(/^\uFEFF/, '')
  const rows = parseCsv(text)
  const header = rows[0]
  const col = Object.fromEntries(header.map((h, i) => [h, i]))
  const cars = []
  const manifest = []
  const droppedNoPrice = []
  const now = Math.floor(Date.now() / 1000)

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r]
    if (row.length < header.length) continue
    const get = (name) => (col[name] == null ? '' : row[col[name]] ?? '')
    const id = get('anonymous_id')
    let brandRaw = get('brand')
    let name_model = ''
    const series = get('series')
    const yearRaw = get('model_year')
    const title = cleanTitle(get('title'))
    if (!brandRaw || brandRaw === 'None') {
      const derived = deriveBrandFromTitle(title)
      if (derived !== 'Unknown') {
        brandRaw = derived
        const model = deriveModelFromTitle(title, derived)
        if (model) name_model = model
      }
    }
    const priceCny = parseWan(get('used_price'))
    const kmRaw = get('mileage')
    const km = parseWan(kmRaw)
    const fuel = inferFuel(get('fuel_type'), `${title} ${series} ${brandRaw}`)
    const type = inferType(fuel, `${title} ${series} ${brandRaw}`)
    const colorName = cleanColor(get('color'))
    const features = cleanFeatures(get('features'))
    const imageCount = parseInt(get('image_count'), 10) || 0
    const localPath = get('images_local_path')
    const rel = String(localPath || '').replace(/^data\/images\//, '')
    const imgs = []
    for (let n = 1; n <= Math.min(imageCount, 8); n++) {
      imgs.push(`${IMG_CDN}/${rel}/image_${pad2(n)}.webp`)
    }
    const year = /^\d{4}$/.test(yearRaw) ? String(yearRaw) : ''
    let name = name_model
      || [brandRaw, series && series !== 'None' ? series : ''].filter(Boolean).join(' ').trim()
    if (!name_model && series && brandRaw && series.toLowerCase().startsWith(brandRaw.toLowerCase())) {
      name = `${brandRaw} ${series.slice(brandRaw.length)}`.trim()
    }
    if (name === brandRaw) name = brandRaw

    if (!Number.isFinite(priceCny) || priceCny <= 0) {
      droppedNoPrice.push(id)
      continue
    }
    if (imgs.length === 0) continue

    cars.push({
      id,
      name,
      brand: brandRaw || 'Unknown',
      trim: title || name,
      type,
      fuel,
      condition: 'used',
      price: Math.max(100, Math.round(priceCny / FX)),
      year,
      km: Math.round(km || 0),
      transmission: get('transmission') || undefined,
      colorName,
      color: colorName,
      displacement: get('displacement') || undefined,
      specs: [
        fuel,
        `${(km || 0).toLocaleString('en-US')} km`,
        get('transmission') || 'AT',
      ].filter(Boolean),
      img: imgs,
      listedAt: now - r,
      regDate: get('registration_date') || undefined,
      emission: get('emission_standard') || undefined,
    })

    if (rel) {
      manifest.push({ id, key: `${rel}`, count: imageCount })
    }
  }

  const backup = path.join(ROOT, '_tools', 'car_data', 'cars.generated.eauto-backup.json')
  if (fs.existsSync(OUT_CATALOG) && !fs.existsSync(backup)) {
    fs.copyFileSync(OUT_CATALOG, backup)
  }

  let mergedNew = []
  if (fs.existsSync(PREV_CATALOG)) {
    const prev = JSON.parse(fs.readFileSync(PREV_CATALOG, 'utf8'))
    mergedNew = prev.filter((c) => c.condition === 'new' && Array.isArray(c.img) && c.img.length && c.price > 0)
    for (const c of mergedNew) {
      const blob = `${c.name} ${c.trim || ''} ${c.brand || ''}`
      if (!c.fuel) c.fuel = c.batteryKwh || c.rangeKm ? 'Electric' : inferFuel('', blob)
      if (!c.type) c.type = inferType(c.fuel, blob)
      if (!c.brand) c.brand = 'Unknown'
      if (!c.name) c.name = c.brand
    }
    cars.push(...mergedNew)
  }

  fs.writeFileSync(OUT_CATALOG, JSON.stringify(cars))
  fs.writeFileSync(OUT_MANIFEST, JSON.stringify(manifest))

  const stats = {
    generated: cars.length,
    newFromBackup: mergedNew.length,
    rows: rows.length - 1,
    dropped: droppedNoPrice.length,
    brands: [...new Set(cars.map((c) => c.brand))].length,
    fx: FX,
    byFuel: countBy(cars, 'fuel'),
    byType: countBy(cars, 'type'),
    priceUsdMin: Math.min(...cars.map((c) => c.price)),
    priceUsdMax: Math.max(...cars.map((c) => c.price)),
    withImages: cars.filter((c) => c.img.length).length,
    noSeries: cars.filter((c) => !c.name.includes(' ')).length,
  }
  const report = [
    `generated: ${stats.generated}`,
    `new from backup: ${stats.newFromBackup}`,
    `csv rows: ${stats.rows}`,
    `dropped (no price): ${stats.dropped}`,
    `brands: ${stats.brands}`,
    `fx CNY/USD: ${stats.fx}`,
    `price USD: ${stats.priceUsdMin} - ${stats.priceUsdMax}`,
    `with images: ${stats.withImages}`,
    `no series name: ${stats.noSeries}`,
    `byFuel: ${JSON.stringify(stats.byFuel)}`,
    `byType: ${JSON.stringify(stats.byType)}`,
  ].join('\n')
  fs.writeFileSync(OUT_REPORT, report)
  console.log(report)
  console.log('written:', OUT_CATALOG, path.basename(OUT_MANIFEST))
}

function countBy(arr, key) {
  const m = {}
  for (const c of arr) m[c[key]] = (m[c[key]] || 0) + 1
  return m
}

main().catch((e) => { console.error(e); process.exit(1) })