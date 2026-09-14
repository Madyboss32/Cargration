import { blogPosts } from '@/src/data/blog'
import { countryGuides } from '@/src/data/countryGuides'
import { getAllCars, carSlug } from '@/src/data/cars.server'
import { BRAND_MODEL_KEYWORDS } from '@/src/data/seoKeywords'
import { brandSlug, modelSlug } from '@/src/lib/brandSeo'
import { locales, defaultLocale } from '@/src/i18n/config'
import type { CatalogItem } from '@/src/types'

// Max URLs per sitemap file (Google limit is 50,000).
export const SITEMAP_CHUNK = 8000

const STATIC_ROUTES: string[] = [
  '',
  '/inventory',
  '/used-cars',
  '/new-cars',
  '/evs',
  '/brands',
  '/b2c-car-export',
  '/how-it-works',
  '/logistics',
  '/inspection',
  '/country-guides',
  '/request-car',
  '/contact',
  '/blog',
  '/about',
  '/faq',
  '/testimonials',
  '/warranty',
  '/careers',
  '/payment',
  '/terms',
  '/privacy-policy',
]

type CarLike = Pick<CatalogItem, 'brand' | 'name' | 'trim' | 'year'> & { id?: string; listedAt?: number }

export interface SitemapEntry {
  path: string
  priority: number
  lastModified?: Date
}

/** Non-car sitemap entries: static routes, blog posts, country guides. */
export function staticEntries(): SitemapEntry[] {
  const priorities: Record<string, number> = {
    '': 1.0,
    '/inventory': 0.9,
    '/used-cars': 0.9,
    '/new-cars': 0.9,
    '/evs': 0.8,
    '/brands': 0.9,
    '/b2c-car-export': 0.8,
    '/how-it-works': 0.7,
    '/logistics': 0.7,
    '/inspection': 0.7,
    '/country-guides': 0.7,
    '/request-car': 0.7,
    '/contact': 0.7,
    '/blog': 0.6,
    '/about': 0.5,
    '/faq': 0.5,
    '/testimonials': 0.5,
    '/warranty': 0.5,
    '/careers': 0.4,
    '/payment': 0.4,
    '/terms': 0.2,
    '/privacy-policy': 0.2,
  }
  return STATIC_ROUTES.map((path) => ({ path, priority: priorities[path] }))
}

/** Full entry list (before per-locale expansion). */
export function allEntries(cars: CarLike[]): SitemapEntry[] {
  const entries: SitemapEntry[] = staticEntries()
  for (const post of blogPosts) {
    entries.push({ path: `/blog-post/${post.slug}`, priority: 0.6 })
  }
  for (const guide of Object.values(countryGuides)) {
    entries.push({ path: `/country-guide/${guide.slug}`, priority: 0.7 })
  }
  for (const brand of brandList(cars)) {
    entries.push({ path: `/brands/${brandSlug(brand)}`, priority: 0.7 })
  }
  for (const kb of BRAND_MODEL_KEYWORDS) {
    const seen = new Set<string>()
    const brandSlugValue = brandSlug(kb.brand)
    const models = [...new Set(cars.filter((c) => c.brand === kb.brand).map((c) => stripName(c.name, kb.brand)))]
    for (const m of models) {
      const key = modelSlug(m)
      if (!key || key.length < 2 || key === brandSlugValue) continue
      if (seen.has(key)) continue
      seen.add(key)
      entries.push({ path: `/brands/${brandSlugValue}/${key}`, priority: 0.65 })
    }
  }
  for (const car of cars) {
    if (!car.id) continue
    entries.push({
      path: `/car-detail/${carSlug(car as CatalogItem)}`,
      priority: 0.8,
      lastModified: car.listedAt ? new Date(car.listedAt * 1000) : undefined,
    })
  }
  return entries
}

function stripName(name: string, brand: string): string {
  const n = name || ''
  return n.startsWith(brand + ' ') ? n.slice(brand.length + 1) : n
}

function brandList(cars: CarLike[]): string[] {
  return [...new Set(cars.map((c) => (c as CatalogItem).brand).filter(Boolean))]
}

/** How many chunked sitemap files are needed. */
export function fileCount(cars: CarLike[]): number {
  return Math.ceil((allEntries(cars).length * 6) / SITEMAP_CHUNK)
}

/**
 * Full flat list of localized URLs (every locale + x-default alternates), used by the
 * sitemap chunk routes. `base` is the site origin (e.g. https://www.cargration.com).
 */
export interface SitemapUrl {
  url: string
  lastModified?: Date
  alternates: Record<string, string>
}

export function localizedUrl(path: string, locale: string, base: string): string {
  const clean = path === '/' ? '' : path
  return locale === defaultLocale ? `${base}${clean || '/'}` : `${base}/${locale}${clean}`
}

export function expandEntries(entries: SitemapEntry[], base: string): SitemapUrl[] {
  const out: SitemapUrl[] = []
  for (const e of entries) {
    const languages: Record<string, string> = {}
    for (const l of locales) languages[l] = localizedUrl(e.path, l, base)
    languages['x-default'] = localizedUrl(e.path, defaultLocale, base)
    for (const l of locales) {
      out.push({ url: localizedUrl(e.path, l, base), lastModified: e.lastModified, alternates: languages })
    }
  }
  return out
}
