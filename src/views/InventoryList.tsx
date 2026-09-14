import type { CatalogItem } from '../types'
import { getAllCars, getBrands, getModels, getColors, slimForCard, carSlug } from '../data/cars.server'
import { getDictionary, createT } from '../i18n'
import { defaultLocale } from '../i18n/config'
import SearchFilter from '../components/SearchFilter'
import CarCard from '../components/CarCard'
import BreadcrumbNav from '../components/BreadcrumbNav'
import { itemListJsonLd, jsonLdScript } from '../lib/jsonld'
import { SITE } from '../config/site'

export interface ListingConfig {
  base: string
  eyebrow: string
  title: string
  sub: string
  emptyHint?: string
  preset?: Record<string, string>
  eyebrowKey?: string
  titleKey?: string
  subKey?: string
  emptyHintKey?: string
  trail?: { label: string; href?: string }[]
}

interface InventoryListProps {
  config: ListingConfig
  lang: string
  searchParams: Record<string, string | string[] | undefined>
}

const AGE_MAP: Record<string, (year: string | undefined) => boolean> = {
  'under-1': (y) => { const v = parseInt(y || '0', 10); return v >= new Date().getFullYear() - 1 },
  '1-3': (y) => { const v = parseInt(y || '0', 10); const age = new Date().getFullYear() - v; return age >= 1 && age <= 3 },
  '3-5': (y) => { const v = parseInt(y || '0', 10); const age = new Date().getFullYear() - v; return age >= 3 && age <= 5 },
  '5+': (y) => { const v = parseInt(y || '0', 10); return new Date().getFullYear() - v > 5 },
}

function pick(sp: Record<string, string | string[] | undefined>, key: string): string {
  const v = sp[key]
  if (Array.isArray(v)) return v[0] || ''
  return v || ''
}

function hrefWith(base: string, state: Record<string, string>, lang: string, page: number): string {
  const merged: Record<string, string> = { ...state }
  if (page === 1) delete merged.page
  else merged.page = String(page)
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(merged)) {
    if (v !== undefined && v !== '') params.set(k, String(v))
  }
  const qs = params.toString()
  return locHref(qs ? `${base}?${qs}` : base, lang)
}

function filterCars(cars: CatalogItem[], state: Record<string, string>): CatalogItem[] {
  let result = cars
  if (state.q) {
    const lower = state.q.toLowerCase()
    result = result.filter((c) => `${c.brand} ${c.name} ${c.trim} ${c.year || ''}`.toLowerCase().includes(lower))
  }
  if (state.brand) result = result.filter((c) => c.brand === state.brand)
  if (state.model) {
    const target = state.model
    result = result.filter((c) => {
      const m = c.name.startsWith(c.brand + ' ') ? c.name.slice(c.brand.length + 1).trim() : c.name
      return `${c.brand} ${c.name}` === target || c.name === target || m === target
    })
  }
  if (state.type) result = result.filter((c) => (c.type || '') === state.type)
  if (state.fuel) result = result.filter((c) => c.fuel === state.fuel)
  if (state.cond) result = result.filter((c) => c.condition === state.cond)
  if (state.color) result = result.filter((c) => (c.color || c.colorName || '').toLowerCase() === state.color)
  if (state.transmission) result = result.filter((c) => c.transmission === state.transmission)
  if (state.drive) result = result.filter((c) => c.drive === state.drive)
  if (state.age && AGE_MAP[state.age]) result = result.filter((c) => AGE_MAP[state.age](c.year))
  if (state.price) {
    const [min, max] = state.price.split('-').map(Number)
    if (min) result = result.filter((c) => c.price >= min)
    if (max) result = result.filter((c) => c.price <= max)
  }
  if (state.sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
  else if (state.sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
  else if (state.sort === 'newest') result = [...result].sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'))
  return result
}

function locHref(href: string, lang: string): string {
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href
  const clean = href === '' ? '/' : href
  const l = lang || defaultLocale
  if (l === defaultLocale) return clean
  if (clean.startsWith('/')) {
    return `/${l}${clean === '/' ? '' : clean}`
  }
  return clean
}

export default function InventoryList({ config, lang, searchParams }: InventoryListProps) {
  const t = createT(getDictionary(lang))

  const raw: Record<string, string> = {}
  const keys = ['q', 'brand', 'model', 'type', 'fuel', 'cond', 'price', 'age', 'transmission', 'drive', 'color', 'sort']
  for (const k of keys) raw[k] = pick(searchParams, k)

  const state: Record<string, string> = { ...raw }
  if (config.preset) {
    for (const [k, v] of Object.entries(config.preset)) {
      if (!state[k]) state[k] = v
    }
  }

  const page = Math.max(1, parseInt(pick(searchParams, 'page'), 10) || 1)
  const PAGE_SIZE = 24

  const all = getAllCars()
  const filtered = filterCars(all, state)
  const total = filtered.length
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const items = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(slimForCard).filter((c) => c.img && c.img.length > 0)

  const listItems = items.map((car) => ({
    name: `${car.brand} ${car.name} ${car.trim || ''}`.replace(/\s+/g, ' ').trim(),
    url: `${SITE.url}${locHref(`/car-detail/${carSlug(car)}`, lang)}`,
    image: car.img[0],
  }))

  const brands = getBrands()
  const models = getModels(state.brand || undefined)
  const colors = getColors()

  const eyebrow = config.eyebrowKey ? t(config.eyebrowKey) : config.eyebrow
  const title = config.titleKey ? t(config.titleKey) : config.title
  const sub = config.subKey ? t(config.subKey) : config.sub

  const activeChips: [string, string][] = []
  if (state.q) activeChips.push(['q', `"${state.q}"`])
  if (state.brand) activeChips.push(['brand', state.brand])
  if (state.model) activeChips.push(['model', state.model])
  if (state.type) activeChips.push(['type', state.type])
  if (state.fuel) activeChips.push(['fuel', state.fuel])
  if (state.cond) activeChips.push(['cond', state.cond])
  if (state.price) activeChips.push(['price', state.price])
  if (state.age) activeChips.push(['age', state.age])

  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === pageCount || Math.abs(n - page) <= 2
  )

  return (
    <main>
      {listItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(itemListJsonLd(listItems))} />
      )}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={[{ label: t('breadcrumb.home'), href: '/' }, ...(config.trail || []), { label: title }]} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{eyebrow}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{title}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>{sub}</p>
        </div>
      </section>

      <section className="py-10 md:py-16" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <SearchFilter brands={brands} models={models} colors={colors} basePath={config.base} />
          </div>

          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <p className="text-sm" style={{ color: 'var(--color-ink-700)' }}>
              {total === 1 ? t('search.resultOne') : t('search.results', { n: total.toLocaleString() })}
              {pageCount > 1 && <> — {t('search.page', { p: page, total: pageCount })}</>}
            </p>
            {activeChips.length > 0 && (
              <nav className="flex gap-2 flex-wrap" aria-label="Active filters">
                {activeChips.map(([key, label]) => {
                  const next: Record<string, string> = { ...state, [key]: '', page: '1' }
                  return (
                    <a
                      key={key}
                      href={hrefWith(config.base, next, lang, 1)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-600)] hover:bg-[var(--color-blue-500)] hover:text-white transition-colors"
                    >
                      {label} ✕
                    </a>
                  )
                })}
              </nav>
            )}
          </div>

          {items.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((car, i) => (
                  <CarCard key={car.id || i} car={car} index={i} headingLevel="h2" />
                ))}
              </div>

              {pageCount > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  {page > 1 && (
                    <a href={hrefWith(config.base, state, lang, page - 1)} className="px-4 py-2 rounded-lg border bg-white text-sm font-semibold" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>
                      {t('listing.prev')}
                    </a>
                  )}
                  {pageNumbers.map((n, idx) => (
                    <span key={n} className="flex items-center gap-2">
                      {idx > 0 && pageNumbers[idx - 1] !== n - 1 && <span style={{ color: 'var(--color-steel-400)' }}>…</span>}
                      <a
                        href={hrefWith(config.base, state, lang, n)}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${n === page ? 'text-white' : 'bg-white border hover:bg-[var(--color-blue-100)]'}`}
                        style={n === page
                          ? { background: 'var(--color-blue-500)' }
                          : { borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}
                      >
                        {n}
                      </a>
                    </span>
                  ))}
                  {page < pageCount && (
                    <a href={hrefWith(config.base, state, lang, page + 1)} className="px-4 py-2 rounded-lg border bg-white text-sm font-semibold" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>
                      {t('listing.next')}
                    </a>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg font-semibold mb-2" style={{ color: 'var(--color-ink-900)' }}>{t('listing.noVehicles')}</p>
              <p className="text-sm mb-6" style={{ color: 'var(--color-ink-700)' }}>
                {config.emptyHintKey ? t(config.emptyHintKey) : (config.emptyHint || t('search.noResults'))}
              </p>
              <a href={locHref(config.base, lang)} className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
                {t('listing.resetFilters')}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
