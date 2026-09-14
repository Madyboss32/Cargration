import type { CatalogItem } from '../types'
import badImages from './badImages.json'
import r2PresentKeys from './r2-present.json'
import { cacheSet } from '../lib/redis'
import { colorCodes } from '../i18n/values'
import { SITE } from '../config/site'

// Cloudflare Workers (edge) has no Node.js `fs`, no real `process.cwd()` disk and
// no local filesystem. Next.js inlines `process.env.NEXT_RUNTIME` at build time
// (as 'nodejs' or 'edge'), so the Node branches below are dead-code-eliminated
// from the edge bundle; on the edge the catalog and the R2 image-presence list
// are read from R2 / the bundle instead of the filesystem.
const IS_EDGE = process.env.NEXT_RUNTIME === 'edge'

function edgeSafeCwd(): string | null {
  try {
    return typeof process.cwd === 'function' ? process.cwd() : null
  } catch {
    return null
  }
}

function readLocalResource(relPath: string): string | null {
  // Runs only under Node.js (build time / next start). On Workers this returns
  // null and callers resolve from R2 / bundled data instead.
  if (IS_EDGE) return null
  const cwd = edgeSafeCwd()
  if (!cwd) return null
  try {
    // Lazy require keeps Node builtins out of the edge worker bundle.
    const { readFileSync } = require('fs') as typeof import('fs')
    const { join } = require('path') as typeof import('path')
    return readFileSync(join(cwd, relPath), 'utf8')
  } catch {
    return null
  }
}
function slugify(s: string): string {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const CATALOG_KEY = 'cargration:catalog:v4'
const QUERY_TTL = 600
const SIMILAR_TTL = 3600

export interface CarQuery {
  q?: string
  brand?: string
  model?: string
  type?: string
  fuel?: string
  cond?: string
  price?: string
  age?: string
  transmission?: string
  drive?: string
  color?: string
  sort?: string
  page?: number
  pageSize?: number
}

export interface CarQueryResult {
  items: CatalogItem[]
  total: number
  page: number
  pageCount: number
}

export const PAGE_SIZE = 24

let cache: CatalogItem[] | null = null
let brandsCache: string[] | null = null

// Avoid a top-level Node import that would break the edge bundle; resolve the
// path lazily only when running under Node.
async function loadCatalogSource(): Promise<CatalogItem[]> {
  // The bundled local file is the single source of truth (builds and runtime).
  // Remote copies (R2 / Redis) can be stale relative to cars.generated.json and
  // cause prerender workers and dynamic pages to resolve different brand/model
  // slugs — e.g. a missing 'Cherry QQ' or 'Landwind' brand -> generic metadata.
  const local = readLocalResource('src/data/cars.generated.json')
  if (local !== null) return JSON.parse(local) as CatalogItem[]
  // Workers runtime: pull the catalog from R2 (same source used in production).
  const res = await fetch(SITE.catalogJsonUrl)
  if (!res.ok) throw new Error(`catalog fetch failed: ${res.status}`)
  return res.json() as Promise<CatalogItem[]>
}

const MAX_PLAUSIBLE_PRICE = 3000000
const NOW_YEAR = new Date().getFullYear()

const IMG_PREFIX = 'https://www.eautoexport.com/'
const RASTER_EXT_RE = /\.(jpe?g|png)$/i

const localImageCache = new Map<string, { value: string | null; at: number }>()
const NEG_TTL_MS = 10 * 60 * 1000

function canonKey(webPath: string): string {
  let k = webPath
  if (k.startsWith('/car-img/')) k = k.slice('/car-img/'.length)
  else {
    try {
      const parsed = new URL(k)
      k = `${parsed.host}${parsed.pathname}`
    } catch {
      if (k.startsWith(IMG_PREFIX)) k = k.slice(IMG_PREFIX.length)
    }
  }
  return k
}

const BAD_IMAGE_KEYS: Set<string> = new Set((badImages as string[]).map(canonKey))

function r2KeyForUrl(u: string): string {
  const parsed = new URL(u)
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname.endsWith('/')) pathname += 'index.webp'
  else pathname = pathname.replace(RASTER_EXT_RE, '.webp')
  return `${parsed.host}${pathname}`
}

let r2Present: Set<string> | null = null
function getR2Present(): Set<string> {
  if (r2Present !== null) return r2Present
  // Bundled at build time (Node) and shipped with the edge worker, so no fs read
  // is needed on Cloudflare.
  r2Present = new Set(r2PresentKeys as string[])
  return r2Present
}

function resolveLocalImage(webPath: string): string | null {
  if (IS_EDGE) return null
  const rel = webPath.slice('/car-img/'.length)
  const hit = localImageCache.get(webPath)
  if (hit && (hit.value || Date.now() - hit.at < NEG_TTL_MS)) return hit.value
  let resolved: string | null = null
  try {
    const { existsSync } = require('fs') as typeof import('fs')
    const { join } = require('path') as typeof import('path')
    const mirror = join(edgeSafeCwd() || '', 'public', 'car-img')
    const webpTwin = rel.replace(RASTER_EXT_RE, '.webp')
    if (existsSync(join(mirror, webpTwin))) {
      resolved = `/car-img/${webpTwin}`
    } else if (!RASTER_EXT_RE.test(rel) || existsSync(join(mirror, rel))) {
      resolved = webPath
    }
  } catch {}
  localImageCache.set(webPath, { value: resolved, at: Date.now() })
  return resolved
}

function localizeImage(u: string): string {
  let fixed = u
  if (fixed.startsWith(IMG_PREFIX + 'http')) fixed = fixed.slice(IMG_PREFIX.length)
  try {
    const parsed = new URL(fixed)
    if (SITE.carImgBase) {
      const key = r2KeyForUrl(fixed)
      if (getR2Present().has(key)) {
        return `${SITE.carImgBase.replace(/\/+$/, '')}/${encodeURI(key)}`
      }
      return fixed
    }
    const webPath = `/car-img/${parsed.host}${encodeURI(parsed.pathname)}`
    const local = resolveLocalImage(webPath)
    if (local) return local
  } catch {}
  return fixed
}

function sanitize(car: CatalogItem): CatalogItem {
  const c = { ...car }
  const base = Number(c.price) || 0
  c.price = Math.max(100, base - 800)
  const y = parseInt(String(c.year ?? ''), 10)
  if (!Number.isFinite(y) || y < 1980 || y > NOW_YEAR + 1) c.year = ''
  if (c.transmission && /#|n\/a/i.test(c.transmission)) c.transmission = undefined
  if (c.drive && /^#|^other$/i.test(c.drive)) c.drive = undefined
  if (Array.isArray(c.img)) {
    c.img = c.img
      .filter((u) => !u.includes('.baiduyun.p.downloading'))
      .filter((u) => !BAD_IMAGE_KEYS.has(canonKey(u)))
      .map(localizeImage)
  }
  return c
}

function buildCatalogFromSource(source: CatalogItem[]): CatalogItem[] {
  return source
    .filter((c) => c.price > 0 && c.price < MAX_PLAUSIBLE_PRICE)
    .map(sanitize)
    .map(normalizeGenerated)
}

function buildCatalog(): CatalogItem[] {
  const local = readLocalResource('src/data/cars.generated.json')
  const raw = JSON.parse(local || '[]') as CatalogItem[]
  return buildCatalogFromSource(raw)
}

function adoptBuilt(built: CatalogItem[]): CatalogItem[] {
  cache = built
  brandsCache = null
  colorsCache = null
  modelsCache.clear()
  void cacheSet(CATALOG_KEY, built, 86400)
  return cache
}

function load(): CatalogItem[] {
  if (cache) return cache
  return adoptBuilt(buildCatalog())
}

let loadPromise: Promise<CatalogItem[]> | null = null

export function ensureLoaded(): Promise<CatalogItem[]> {
  if (cache) return Promise.resolve(cache)
  if (!loadPromise) {
    loadPromise = (async () => {
      // Always build from the bundled local file — never trust a possibly
      // stale Redis/R2 copy of the catalog (it would reintroduce stale brands).
      const source = await loadCatalogSource()
      return adoptBuilt(buildCatalogFromSource(source))
    })().finally(() => { loadPromise = null })
  }
  return loadPromise
}

function normalizeGenerated(car: CatalogItem): CatalogItem {
  if (car.specs?.length) return car
  const year = car.year ? [car.year] : []
  const fuelPart = car.fuel && car.fuel !== 'Petrol'
    ? [car.fuel]
    : car.displacement
      ? [`${(parseInt(car.displacement, 10) / 1000).toFixed(1)}L Petrol`]
      : ['Petrol']
  return {
    ...car,
    loc: 'FOB China',
    specs: [
      ...year,
      ...fuelPart,
      `${(car.km ?? 0).toLocaleString()} km`,
      car.transmission || 'AT',
    ],
  }
}

export function getAllCars(): CatalogItem[] {
  return load()
}

export function getBrands(): string[] {
  if (brandsCache) return brandsCache
  brandsCache = [...new Set(load().map((c) => c.brand))].sort((a, b) => a.localeCompare(b))
  return brandsCache
}

const modelsCache = new Map<string, string[]>()

export function getModels(brand?: string): string[] {
  const key = brand || '*'
  const hit = modelsCache.get(key)
  if (hit) return hit
  const set = new Set<string>()
  for (const c of load()) {
    if (brand && c.brand !== brand) continue
    if (c.name) set.add(c.name)
  }
  const list = [...set].sort((a, b) => a.localeCompare(b))
  modelsCache.set(key, list)
  return list
}

let colorsCache: { code: string; count: number }[] | null = null

export function getColors(): { code: string; count: number }[] {
  if (colorsCache) return colorsCache
  const tally = new Map<string, number>()
  for (const c of load()) {
    for (const code of colorCodes(c.colorName)) tally.set(code, (tally.get(code) || 0) + 1)
  }
  colorsCache = [...tally.entries()]
    .map(([code, count]) => ({ code, count }))
    .sort((a, b) => b.count - a.count)
  return colorsCache
}

export function matchesAge(year: string | undefined, bucket: string): boolean {  const y = parseInt(year || '', 10)
  if (!Number.isFinite(y)) return false
  const age = NOW_YEAR - y
  switch (bucket) {
    case 'under-1': return age < 1
    case '1-3': return age >= 1 && age <= 3
    case '3-5': return age > 3 && age <= 5
    case '5+': return age > 5
    default: return true
  }
}

function parsePrice(price: string): [number, number] {
  const [min, max] = price.split('-').map(Number)
  if (!isFinite(min)) return [0, Infinity]
  return [min, isFinite(max) ? max : Infinity]
}

export function queryCars(query: CarQuery): CarQueryResult {
  let cars = load()

  const q = query.q?.trim().toLowerCase()
  if (q) {
    cars = cars.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.brand.toLowerCase().includes(q) ||
      c.trim.toLowerCase().includes(q)
    )
  }
  if (query.brand) cars = cars.filter((c) => c.brand === query.brand)
  if (query.model) cars = cars.filter((c) => c.name === query.model)
  if (query.type) cars = cars.filter((c) => c.type === query.type)
  if (query.fuel) cars = cars.filter((c) => c.fuel === query.fuel)
  if (query.cond === 'new' || query.cond === 'used') cars = cars.filter((c) => c.condition === query.cond)
  if (query.age && query.age !== 'any') cars = cars.filter((c) => matchesAge(c.year, query.age!))
  if (query.transmission) cars = cars.filter((c) => c.transmission === query.transmission)
  if (query.drive) cars = cars.filter((c) => c.drive === query.drive)
  if (query.color) cars = cars.filter((c) => colorCodes(c.colorName).includes(query.color!))
  if (query.price) {
    const [min, max] = parsePrice(query.price)
    cars = cars.filter((c) => c.price >= min && c.price < max)
  }

  switch (query.sort) {
    case 'price-asc': cars.sort((a, b) => a.price - b.price); break
    case 'price-desc': cars.sort((a, b) => b.price - a.price); break
    case 'newest': cars.sort((a, b) => (b.listedAt || 0) - (a.listedAt || 0)); break
    default: cars.sort((a, b) => Number(b.trending) - Number(a.trending) || (b.listedAt || 0) - (a.listedAt || 0))
  }

  const total = cars.length
  const pageSize = query.pageSize ?? PAGE_SIZE
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const page = Math.min(Math.max(1, query.page ?? 1), pageCount)

  return { items: cars.slice((page - 1) * pageSize, page * pageSize), total, page, pageCount }
}

export function getCarById(id: string): CatalogItem | undefined {
  if (!id.startsWith('cr-')) return undefined
  return load().find((c) => c.id === id)
}

export function resolveCar(id?: string): CatalogItem | undefined {
  if (!id) return undefined
  return getCarById(id)
}

export function resolveCarBySlug(slug: string): CatalogItem | undefined {
  const all = getAllCars()
  return all.find((c) => carSlug(c) === slug)
}

export function carSlug(car: CatalogItem): string {
  return `${slugify(car.brand)}-${slugify(car.name)}-${slugify(car.trim || 'base')}-${car.year || '0'}-${slugify(car.id || '')}`
}

// Minimal projection of a car for card/carousel rendering. Keeps RSC payloads
// tiny (avoids serializing every image URL of every similar car) and avoids
// leaking non-public details into the page stream.
export function slimForCard(car: CatalogItem): CatalogItem {
  return {
    id: car.id,
    brand: car.brand,
    name: car.name,
    trim: car.trim,
    type: car.type,
    fuel: car.fuel,
    price: car.price,
    colorName: car.colorName,
    year: car.year,
    img: car.img && car.img.length ? [car.img[0]] : [],
    loc: car.loc,
    specs: car.specs,
    condition: car.condition,
  } as CatalogItem
}

export interface SimilarCars {
  sameModel: CatalogItem[]
  sameType: CatalogItem[]
  sameFuel: CatalogItem[]
  sameBudget: CatalogItem[]
  sameEra: CatalogItem[]
}

function defaultRank(a: CatalogItem, b: CatalogItem): number {
  return Number(b.trending) - Number(a.trending) || (b.listedAt || 0) - (a.listedAt || 0)
}

export function getSimilarCars(car: CatalogItem, perGroup = 10): SimilarCars {
  const carYear = parseInt(String(car.year || ''), 10)
  const carKm = car.km ?? 0
  const budgetWindow = Math.max(2500, Math.round((car.price || 0) * 0.35))

  const model: CatalogItem[] = []
  const type: CatalogItem[] = []
  const fuel: CatalogItem[] = []
  const budget: Array<{ c: CatalogItem; d: number }> = []
  const era: CatalogItem[] = []

  for (const c of load()) {
    if (c.id && c.id === car.id) continue
    if (car.brand && c.brand === car.brand && c.name === car.name) model.push(c)
    if (car.type && c.type === car.type) type.push(c)
    if (car.fuel && c.fuel === car.fuel) fuel.push(c)
    const d = Math.abs(c.price - (car.price || 0))
    if (d <= budgetWindow) budget.push({ c, d })
    const y = parseInt(String(c.year || ''), 10)
    if (Number.isFinite(carYear) && Number.isFinite(y) && Math.abs(y - carYear) <= 2) era.push(c)
  }

  const trim = (arr: CatalogItem[], rank?: (a: CatalogItem, b: CatalogItem) => number) =>
    arr.sort(rank || defaultRank).slice(0, perGroup).map(slimForCard)

  return {
    sameModel: trim(model),
    sameType: trim(type),
    sameFuel: trim(fuel),
    sameBudget: budget.sort((a, b) => a.d - b.d || defaultRank(a.c, b.c)).slice(0, perGroup).map((x) => x.c).map(slimForCard),
    sameEra: trim(era),
  }
}
