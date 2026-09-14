import {
  findBrandKeywords,
  findModelKeywords,
  type ModelKeywordEntry,
} from '../data/seoKeywords'
import type { CatalogItem } from '../types'

/** Lowercase URL slug for a brand or model string. */
export function brandSlug(s: string): string {
  return slugify(s)
}
export function modelSlug(s: string): string {
  return slugify(s)
}

function slugify(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** 'dolphin' -> 'Dolphin', 'sealion 7' -> 'Sealion 7', 'atto 3' -> 'Atto 3', 'king dm-i' -> 'King DM-i' */
export function titleCaseWords(s: string): string {
  return s
    .split(/\s+/)
    .map((w) => smartCaseWord(w))
    .join(' ')
}

function smartCaseWord(w: string): string {
  const low = w.toLowerCase()
  if (low === 'bmw') return 'BMW'
  if (low === 'byd') return 'BYD'
  if (low === 'dm-i' || low === 'dmi') return 'DM-i'
  if (low === 'ev') return 'EV'
  if (low === 'suv') return 'SUV'
  if (low === 'mpv') return 'MPV'
  if (low === 'hev') return 'HEV'
  if (low === 'phev') return 'PHEV'
  if (low === 'uni-t') return 'UNI-T'
  if (low === 'uni-v') return 'UNI-V'
  if (low === 'uni-k') return 'UNI-K'
  if (low === 'uni-s') return 'UNI-S'
  if (low === 'uni-z') return 'UNI-Z'
  if (low === 'e-star') return 'E-Star'
if (low === 'gt') return 'GT'
  if (low === 'icar') return 'iCar'
  if (low === 'i-land') return 'i-Land'
  if (low === 'i5') return 'i5'
  if (low === 'i6') return 'i6'
  if (low === 'ei5') return 'Ei5'
  if (low === 'imax8') return 'iMax8'
  if (low === 'd5x') return 'D5X'
  if (low === 'bz3') return 'bZ3'
  if (low === 'bz3x') return 'bZ3X'
  if (low === 'bz4x') return 'bZ4X'
  if (low === 'ia5') return 'iA5'
  if (low === '4runner') return '4Runner'
  if (low === 'c-hr') return 'C-HR'
  if (low === 'i3') return 'i3'
  if (low === 'i7') return 'i7'
  if (low === 'i8') return 'i8'
  if (low === 'ix') return 'iX'
  if (low === 'ix1') return 'iX1'
  if (low === 'ix3') return 'iX3'
  if (low === 'xm') return 'XM'
  if (low === 'amg') return 'AMG'
  if (low === 'qq') return 'QQ'
  if (low === 'id') return 'ID'
  if (low === 'idr') return 'IDR'
  if (low === 't-roc') return 'T-Roc'
  if (low === 'xl1') return 'XL1'
  if (low === 'cc') return 'CC'
  if (low === 'gli') return 'GLI'
  if (low === 'sp2') return 'SP2'
  if (low === 'cr-v') return 'CR-V'
  if (low === 'hr-v') return 'HR-V'
  if (low === 'br-v') return 'BR-V'
  if (low === 'ur-v') return 'UR-V'
  if (low === 'xr-v') return 'XR-V'
  if (low === 'zr-v') return 'ZR-V'
  if (low === 'cr-z') return 'CR-Z'
  if (low === 'nsx') return 'NSX'
  if (low === 'tt') return 'TT'
  if (low === 'x-trail') return 'X-Trail'
  if (low === 'gtr') return 'GTR'
  if (/^(\d+[a-z]+|[a-z]+\d+|\d+[a-z]*\d*)$/i.test(w) && /\d/.test(w) && /[a-z]/i.test(w)) return w.toUpperCase()
  return /^[A-Za-z0-9]/.test(w) ? w.charAt(0).toUpperCase() + w.slice(1) : w
}

/** Titlecased display of a keyword primary, keeping brand vocabulary consistent
 *  (e.g. 'audi e tron'/'e tron' -> 'e-tron'). */
export function keywordTitle(primary: string): string {
  return titleCaseWords(primary).replace(/\bE Tron\b/gi, 'e-tron')
}

export interface BrandSeo {
  title: string
  description: string
  keywords: string[]
  /** export-name alias to mention, e.g. 'atto 3' for a catalog 'Yuan Plus' model */
  exportName?: string
}

function condDescBrand(): string {
  return 'new and used'
}

/** Export-name (keyword) the catalog model corresponds to, if any. */
function modelExportName(brand: string, model: string): string | undefined {
  const e = findModelKeywords(brand, model)
  return e ? exportNameOf(e.primary) : undefined
}

/** Strip brand-reference words (byd, denza, yangwang, changan, deepal, li auto) from a
 *  keyword primary so titles like 'changan deepal sl03' become 'SL03' and
 *  'li auto l9' becomes 'L9'. */
export function exportNameOf(primary: string): string {
  const words = primary.split(/\s+/)
  while (words.length) {
    // multi-word brand ref must pair-check before stripping the standalone 'li'
    if (/^li$/i.test(words[0]) && /^auto$/i.test(words[1] || '')) {
      words.shift()
      words.shift()
      continue
    }
    if (/^lynk$/i.test(words[0]) && /^&$/i.test(words[1] || '') && /^co$/i.test(words[2] || '')) {
      words.shift()
      words.shift()
      words.shift()
      continue
    }
    if (/^(byd|denza|yangwang|changan|deepal|jetour|li|gac|trumpchi|geely|oshan|dongfeng|forthing|aeolus|chery|wuling|landwind|voyah|zotye|roewe|toyota|bmw|mercedes|volkswagen|honda|audi|nissan)$/i.test(words[0])) {
      words.shift()
      continue
    }
    break
  }
  const rest = words.join(' ')
  if (/^e tron$/i.test(rest)) return 'e-tron'
  if (/^e tron\s/i.test(rest)) return `e-tron ${titleCaseWords(rest.slice('e tron'.length).trim())}`
  return titleCaseWords(rest)
}

function brandDisplay(brand: string): string {
  return brand || 'Chinese car'
}

/** SEO metadata for a brand  page (e.g. /brands/byd). */
export function brandPageSeo(brand: string): BrandSeo {
  const display = brandDisplay(brand)
  const k = findBrandKeywords(brand)
  if (k) {
    const title = `${titleCaseWords(k.primary)} Cars & Prices | New & Used ${display} for Sale`
    const description = weave(
      k.secondaries,
      `Compare ${titleCaseWords(k.primary)} models, prices and specs. ${display} electric, EV, hybrid and SUV cars for sale at transparent FOB China prices with 200-point inspection and export documents included.`
    )
    return { title, description, keywords: [k.primary, ...k.secondaries] }
  }
  const title = `${display} Cars & Prices | Buy New & Used ${display} from China`
  const description = `Browse ${display} cars for sale at FOB China prices. New and used ${display} models with verified history, 200-point inspection and full export documentation.`
  return { title, description, keywords: [`${display.toLowerCase()} cars`, `${display.toLowerCase()} price`, `buy ${display.toLowerCase()} from China`, `new ${display.toLowerCase()}`, `used ${display.toLowerCase()}`] }
}

/** SEO metadata + visible copy for a model page (e.g. /brands/byd/dolphin). */
export function modelPageSeo(brand: string, model: string): BrandSeo {
  const display = brandDisplay(brand)
  const modelWord = model || brand
  const k = findModelKeywords(brand, model)
  if (k) {
    const exportName = exportNameOf(k.primary)
    const mw = modelWord.trim()
    // Only use the catalog model word when it is printable ASCII — garbled/mojibake
    // catalog names would leak into titles (e.g. 'Changan Qiyuan ??????Lumin').
    const safeModel = mw && /^[\x20-\x7E]+$/.test(modelWord) ? mw : null
    const brandWords = display.toLowerCase().split(/\s+/)
    const stripBrand = (s: string): string =>
      s
        .split(/\s+/)
        .filter((w) => !brandWords.includes(w.toLowerCase()))
        .join(' ')
        .trim()
    if (!exportName) {
      // Primary is pure brand words (e.g. 'dongfeng aeolus') — use the cleaned model name.
      const subject = [display, safeModel ? stripBrand(safeModel) : ''].filter(Boolean).join(' ')
      const title = `${subject} Price | New & Used ${subject} for Sale`
      const description = weave(k.secondaries, `Buy ${subject} at FOB China prices. ${safeModel ? `${display} ${safeModel} inventory inspected, with export documents and 200-point verification. ` : ''}Compare ${subject} pricing and models.`)
      return { title, description, keywords: [k.primary, ...k.secondaries], exportName }
    }
    const subject = display.toLowerCase().endsWith(exportName.toLowerCase())
      ? display
      : `${display} ${exportName}`.trim()
    const dataName = safeModel && safeModel.toLowerCase() !== exportName.toLowerCase() ? safeModel : null
    const title = dataName
      ? `${subject} Price | New & Used ${display} ${dataName} (${exportName}) for Sale`
      : `${subject} Price | New & Used ${subject} for Sale`
    const description = weave(
      k.secondaries,
      `Buy ${subject} at FOB China prices. ${dataName ? `${display} ${dataName} inventory inspected, with export documents and 200-point verification. ` : ''}Compare ${subject} pricing and models.`
    )
    return { title, description, keywords: [k.primary, ...k.secondaries], exportName }
  }
  const cleanModel = modelWord.replace(/[^\x20-\x7E]+/g, '').trim()
  const safeSubject = cleanModel ? `${display} ${cleanModel}`.trim() : display
  const subject = cleanModel ? safeSubject : `${display} ${modelWord}`.trim()
  const titleLabel = cleanModel ? safeSubject : subject
  const title = `${titleLabel} Price & Specs | Buy New & Used ${titleLabel} from China`
  const descBase = `Browse ${titleLabel} cars for sale at FOB China prices — ${conditionPhrase()} ${cleanModel || modelWord.toLowerCase()} listings with 200-point inspection and full export documentation.`
  const brandEntry = findBrandKeywords(brand)
  if (brandEntry) {
    return {
      title,
      description: weave(brandEntry.secondaries, descBase),
      keywords: [brandEntry.primary, ...brandEntry.secondaries],
      exportName: brandEntry.primary,
    }
  }
  return {
    title,
    description: descBase,
    keywords: [`${titleLabel.toLowerCase()} price`, `${titleLabel.toLowerCase()} for sale`, `buy ${titleLabel.toLowerCase()} from China`, `used ${titleLabel.toLowerCase()}`],
  }
}

/** Visible H1 + lead copy for a brand page. */
export function brandPageContent(brand: string): { title: string; sub: string } {
  const seo = brandPageSeo(brand)
  return { title: seo.title, sub: seo.description }
}

/** Visible H1 + lead copy + keyword chips for a model page. */
export function modelPageContent(brand: string, model: string): { title: string; sub: string; chips: string[] } {
  const seo = modelPageSeo(brand, model)
  const chips = seo.exportName && !seo.exportName.toLowerCase().includes(model.toLowerCase())
    ? [...new Set([seo.exportName, ...seo.keywords.slice(0, 4)])]
    : seo.keywords.slice(0, 5)
  return { title: seo.title, sub: seo.description, chips }
}

/** Keyword entry for a specific catalog car (used by car-detail SEO). */
export function carKeywordEntry(car: Pick<CatalogItem, 'brand' | 'name'>): ModelKeywordEntry | undefined {
  const model = car.name
  if (!model) return undefined
  const n = model.startsWith(car.brand + ' ') ? model.slice(car.brand.length + 1) : model
  return findModelKeywords(car.brand, n)
}

function conditionPhrase(): string {
  return 'new and used'
}

function weave(secondaries: string[], base: string): string {
  const pool = secondaries.filter((s) => !base.toLowerCase().includes(s))
  const extra = pool.slice(0, 3).map((s) => titleCaseWords(s)).join(', ')
  let out = base
  if (extra) out = `${extra}. ${out}`
  return out.length <= 160 ? out : out.slice(0, 157).replace(/\s+\S*$/, '') + '…'
}