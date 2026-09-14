import type { CatalogItem } from '../types'
import { carKeywordEntry, keywordTitle, titleCaseWords } from './brandSeo'
import { findBrandKeywords } from '../data/seoKeywords'

const NOW_YEAR = new Date().getFullYear()

const TYPE_LABELS: Record<string, string> = {
  suv: 'SUV',
  sedan: 'sedan',
  mpv: 'MPV',
  hatchback: 'hatchback',
  pickup: 'pickup truck',
  van: 'van',
  truck: 'truck',
}

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function pick<T>(arr: T[], seed: string): T {
  return arr[hash(seed) % arr.length]
}

function ageOf(car: CatalogItem): number | null {
  const y = parseInt(String(car.year || ''), 10)
  return Number.isFinite(y) ? Math.max(0, NOW_YEAR - y) : null
}

function modelOf(car: CatalogItem): string {
  const n = car.name || ''
  return n.startsWith(car.brand + ' ') ? n.slice(car.brand.length + 1) : n
}

export function carDisplayName(car: CatalogItem): string {
  return `${car.brand} ${modelOf(car)}`.trim()
}

/** Keep mojibake/garbled catalog model names out of search-engine metadata. */
function cleanModelOf(car: CatalogItem): string {
  const m = modelOf(car)
  return m && m !== car.brand && /^[\x20-\x7E]+$/.test(m) ? m : ''
}

function titleName(car: CatalogItem): string {
  return `${car.brand} ${cleanModelOf(car)}`.trim()
}

function displacementLiters(car: CatalogItem): string | null {
  if (!car.displacement) return null
  const raw = String(car.displacement).trim()
  const turbo = /t$/i.test(raw)
  const m = raw.match(/[\d.]+/)
  if (!m) return null
  let n = parseFloat(m[0])
  if (!Number.isFinite(n) || n <= 0) return null
  if (n >= 1000) n = n / 1000
  return `${n.toFixed(1)}${turbo ? 'T' : ''}`
}

function conditionPhrase(car: CatalogItem): string {
  if (car.condition === 'new') return 'Brand-new'
  const age = ageOf(car)
  if (age === null) return 'Pre-owned'
  if (age <= 1) return 'Nearly new pre-owned'
  if (age <= 3) return 'Recent-year pre-owned'
  if (age <= 5) return 'Well-priced pre-owned'
  return 'Value pre-owned'
}

function kmPhrase(car: CatalogItem): string {
  const km = car.km ?? 0
  if (car.condition !== 'new' && !car.km) return 'mileage verified before purchase'
  if (car.condition === 'new' || km === 0) return '0 km delivery mileage'
  if (km <= 300) return `delivery-only ${km.toLocaleString()} km`
  return `${km.toLocaleString()} km`
}

export function carHighlights(car: CatalogItem): string[] {
  const out: string[] = []
  const year = car.year || ''
  out.push(
    car.condition === 'new'
      ? `New ${year} vehicle sourced from authorised Chinese dealers`
      : `${year} used vehicle, ${kmPhrase(car)}, verified history`
  )
  const dl = displacementLiters(car)
  if (car.fuel === 'Electric') {
    if (car.rangeKm) out.push(`${car.rangeKm} km CLTC electric range`)
    if (car.batteryKwh) out.push(`${car.batteryKwh} kWh battery pack, zero tailpipe emissions`)
  } else if (car.fuel && car.fuel !== 'Petrol') {
    out.push([dl, car.fuel].filter(Boolean).join(' ') + ' powertrain')
    if (car.powerKw) out.push(`${car.powerKw} kW maximum power output`)
  } else {
    if (dl) out.push(`${dl} engine`)
    if (car.powerKw) out.push(`${car.powerKw} kW (${Math.round(car.powerKw * 1.36)} hp) output`)
  }
  if (car.transmission) out.push(car.transmission === 'MT' ? 'Manual transmission' : car.transmission === 'CVT' ? 'CVT automatic transmission' : 'Automatic transmission')
  if (car.drive) out.push({ '2WD': '2-wheel drive', AWD: 'All-wheel drive (AWD)', '4WD': '4-wheel drive (4WD)' }[car.drive] || car.drive)
  if (car.seats) out.push(`${car.seats}-seater layout${car.doors ? `, ${car.doors} doors` : ''}`)
  if (car.colorName) out.push(`${car.colorName} exterior`)
  if (car.dims) {
    const [l, w, h] = car.dims.split('*')
    if (l && w && h) out.push(`Overall dimensions ${l} × ${w} × ${h} mm`)
  }
  if (car.wheelSize) out.push(`${car.wheelSize} tires`)
  if ((car.units ?? 1) > 1) out.push(`${car.units} identical units available for fleet orders`)
  return out
}

export function carMetaDescription(car: CatalogItem): string {
  const name = titleName(car)
  const cond = car.condition === 'new' ? 'New' : 'Used'
  const fuelBit = car.fuel && car.fuel !== 'Petrol' ? ` ${car.fuel.toLowerCase()}` : ''
  const typeBit = TYPE_LABELS[car.type] || 'car'
  const hook = pick([
    '200-point inspected, documents included.',
    'Inspected & export-ready.',
    'Full document set included.',
    'Ready for container loading.',
  ], car.id || name)
  const base = [cond, yearStr(car), name + fuelBit, typeBit].filter(Boolean).join(' ')
    + `, $${car.price.toLocaleString()} FOB China. ${kmPhrase(car)}. ${hook}`
  const entry = carKeywordEntry(car)
  if (entry) {
    const lead = entry.secondaries.slice(0, 2).map((s) => titleCaseWords(s)).join(', ')
    return truncate(`${lead}. ${base}`, 160)
  }
  const be = findBrandKeywords(car.brand)
  if (be) {
    const lead = [be.primary, ...be.secondaries.slice(0, 2)].map((s) => titleCaseWords(s)).join(', ')
    return truncate(`${lead}. ${base}`, 160)
  }
  return truncate(base, 160)
}

function truncate(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, '') + '…'
}

function yearStr(car: CatalogItem): string {
  return car.year ? String(car.year) : ''
}

export function carExportTitle(car: CatalogItem): string {
  const year = String(car.year || car.specs?.[0] || '').trim()
  const make = (car.brand || '').trim()
  const model = cleanModelOf(car)
  const identity = [year, make, model].filter(Boolean).join(' ').replace(/\s+/g, ' ')
  const subject = identity || car.name || 'car'
  const entry = carKeywordEntry(car)
  if (entry) {
    const cond = car.condition === 'new' ? 'New' : 'Used'
    const primary = keywordTitle(entry.primary)
    return `${primary} Price | Buy ${cond} ${subject} for Sale - FOB China`
  }
  const be = findBrandKeywords(car.brand)
  if (be) {
    const cond = car.condition === 'new' ? 'New' : 'Used'
    return `${titleCaseWords(be.primary)} Price | Buy ${cond} ${subject} for Sale - FOB China`
  }
  return `Buy ${subject} - Chinese Cars for Export | FOB China Price`
}

export function carKeywords(car: CatalogItem): string[] {
  const name = titleName(car)
  const cond = car.condition === 'new' ? 'new' : 'used'
  const type = TYPE_LABELS[car.type] || 'car'
  const entry = carKeywordEntry(car)
  if (entry) {
    return [entry.primary, ...entry.secondaries, `${cond} ${name} for sale`, `${name} export price`, `${name} FOB China`]
  }
  const be = findBrandKeywords(car.brand)
  if (be) {
    return [be.primary, ...be.secondaries, `${cond} ${name} for sale`, `${name} export price`, `${String(car.year || '')} ${brandModel(car)}`, `${name} FOB China`, `${type} export from China`, `${car.fuel || 'petrol'} ${type} import`, `China car exporter ${car.brand}`, `buy ${cond} cars from China`]
  }
  return [
    `${cond} ${name} for sale`,
    `${name} export price`,
    `${String(car.year || '')} ${brandModel(car)}`,
    `${name} FOB China`,
    `${type} export from China`,
    `${car.fuel || 'petrol'} ${type} import`,
    `China car exporter ${car.brand}`,
    `buy ${cond} cars from China`,
  ]
}

function brandModel(car: CatalogItem): string {
  return titleName(car)
}

export function carOverview(car: CatalogItem): string[] {
  const name = titleName(car)
  const type = TYPE_LABELS[car.type] || 'vehicle'
  const yr = car.year ? `${car.year} ` : ''
  const paras: string[] = []

  const opener = pick([
    `This ${yr}${name} is offered at $${car.price.toLocaleString()} FOB from our China export facility.`,
    `Listed at $${car.price.toLocaleString()} FOB, this ${yr}${name} is ready for international shipment.`,
    `Cargration offers this ${yr}${name} at a transparent $${car.price.toLocaleString()} FOB price.`,
  ], car.id || name)

  const condDetail = car.condition === 'new'
    ? `a brand-new ${type} sourced through authorised Chinese dealer channels`
    : `a ${conditionPhrase(car).toLowerCase()} ${type} with ${kmPhrase(car)}`
  paras.push(`${opener} It is ${condDetail}, fully detailed below.`)

  const powerBits: string[] = []
  if (car.fuel === 'Electric') {
    powerBits.push('fully electric powertrain')
    if (car.rangeKm) powerBits.push(`${car.rangeKm} km CLTC range`)
    if (car.batteryKwh) powerBits.push(`${car.batteryKwh} kWh battery`)
  } else {
    const dl = displacementLiters(car)
    const fuel = car.fuel || 'Petrol'
    if (/^petrol$/i.test(fuel)) {
      powerBits.push(dl ? `${dl} petrol engine` : 'petrol engine')
    } else {
      if (dl) powerBits.push(`${dl}-liter engine`)
      powerBits.push(`${fuel.toLowerCase()} powertrain`)
    }
    if (car.powerKw) powerBits.push(`${car.powerKw} kW maximum power`)
  }
  if (car.transmission) powerBits.push(transmissionLong(car.transmission))
  if (car.drive) powerBits.push(driveLong(car.drive))
  const art = (s: string) => (/^[aeiou]/i.test(s) ? `an ${s}` : `a ${s}`)
  paras.push(
    powerBits.length === 1
      ? `Power comes from ${art(powerBits[0])}.`
      : `Under the skin it combines ${joinAnd(powerBits.map(art))}.`
  )

  const practical: string[] = []
  if (car.seats) practical.push(`a ${car.seats}-seat cabin`)
  if (car.doors) practical.push(`${car.doors} doors`)
  if (practical.length) paras.push(`Layout is ${joinAnd(practical)}, making it a practical choice${car.type === 'suv' || car.type === 'mpv' ? ' for families' : ' for daily driving and resale'}.`)

  paras.push(
    pick([
      `Every Cargration listing passes our 200-point inspection and ships with complete export documentation — certificate, bill of lading, and customs paperwork — from any of 8 Chinese departure ports to 40+ destination countries.`,
      `Your order includes the 200-point inspection report, export certificate, port loading, and a full document set. Ocean, Ro-Ro, and rail freight depart weekly to 42+ countries.`,
      `We handle sourcing verification, 200-point inspection, export clearance, and loading. Photo and video reports are shared before the container seals — no surprises at arrival.`,
    ], (car.id || name) + 'p3')
  )

  return paras
}

function transmissionLong(t: string): string {
  return t === 'MT' ? 'manual gearbox' : t === 'CVT' ? 'CVT automatic' : 'automatic transmission'
}
function driveLong(d: string): string {
  return d === 'AWD' ? 'all-wheel drive' : d === '4WD' ? 'four-wheel drive' : 'two-wheel drive'
}
function joinAnd(items: string[]): string {
  if (items.length <= 1) return items[0] || ''
  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1]
}
