import { Suspense } from 'react'
import SearchFilter from '../components/SearchFilter'
import CarCard from '../components/CarCard'
import { getBrands, getModels, getColors, queryCars, ensureLoaded } from '../data/cars.server'
import { getDictionary, createT } from '../i18n'
import LLink from '../i18n/LLink'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import type { FilterState } from '../components/SearchFilter'

export interface ListingConfig {
  base: string
  eyebrow: string
  title: string
  sub: string
  emptyHint?: string
  preset?: FilterState
  eyebrowKey?: string
  titleKey?: string
  subKey?: string
  emptyHintKey?: string
}

interface CarListingPageProps {
  config: ListingConfig
  lang: string
  searchParams?: Record<string, string | string[] | undefined>
}

const TYPE_KEYS: Record<string, string> = {
  suv: 'type.suv', sedan: 'type.sedan', mpv: 'type.mpv', hatchback: 'type.hatchback',
  pickup: 'type.pickup', van: 'type.van', truck: 'type.truck',
}

const PRICE_KEYS: Record<string, string> = {
  '0-8000': 'heroPrice.under8k',
  '8000-15000': 'heroPrice.8to15k',
  '15000-25000': 'heroPrice.15to25k',
  '25000-40000': 'heroPrice.25to40k',
  '40000-1000000': 'heroPrice.over40k',
}

const AGE_KEYS: Record<string, string> = {
  'under-1': 'search.ageUnder1',
  '1-3': 'search.age1to3',
  '3-5': 'search.age3to5',
  '5+': 'search.age5plus',
}

const FUEL_KEYS: Record<string, string> = {
  Electric: 'fuel.electric',
  Hybrid: 'fuel.hybrid',
  'Plug-in Hybrid': 'fuel.pluginHybrid',
  REEV: 'fuel.reev',
  Petrol: 'fuel.petrol',
  Diesel: 'fuel.diesel',
}

const TRANS_KEYS: Record<string, string> = {
  AT: 'trans.automaticAt',
  CVT: 'trans.cvt',
  MT: 'trans.manualMt',
}

function pick(params: Record<string, string | string[] | undefined> | undefined, key: string): string {
  const v = params?.[key]
  return typeof v === 'string' ? v : ''
}

function hrefWith(config: ListingConfig, state: FilterState, overrides?: Partial<FilterState> & { page?: number }): string {
  const merged = { ...state, ...config.preset, ...overrides }
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(merged)) {
    if (v !== undefined && v !== '' && !(config.preset && k in config.preset && k !== 'page')) {
      if (k === 'page' && v === 1) continue
      params.set(k, String(v))
    }
  }
  const qs = params.toString()
  return `${config.base}${qs ? `?${qs}` : ''}`
}

export default async function CarListingPage({ config, lang, searchParams }: CarListingPageProps) {
  await ensureLoaded()
  const t = createT(getDictionary(lang))

  const state: FilterState = {
    q: pick(searchParams, 'q'),
    brand: pick(searchParams, 'brand'),
    model: pick(searchParams, 'model'),
    type: pick(searchParams, 'type'),
    fuel: pick(searchParams, 'fuel'),
    cond: pick(searchParams, 'cond'),
    price: pick(searchParams, 'price'),
    age: pick(searchParams, 'age'),
    transmission: pick(searchParams, 'transmission'),
    drive: pick(searchParams, 'drive'),
    color: pick(searchParams, 'color'),
    sort: pick(searchParams, 'sort'),
  }
  const page = Math.max(1, parseInt(pick(searchParams, 'page'), 10) || 1)

  const { items, total, pageCount } = queryCars({ ...state, ...config.preset, page })
  const brands = getBrands()
  const models = getModels(state.brand || undefined)
  const colors = getColors()

  const activeChips: [string, string][] = []
  if (state.q) activeChips.push(['q', `"${state.q}"`])
  if (state.brand) activeChips.push(['brand', state.brand])
  if (state.model) activeChips.push(['model', state.brand && state.model.startsWith(state.brand + ' ') ? state.model.slice(state.brand.length + 1) : state.model])
  if (state.type) activeChips.push(['type', TYPE_KEYS[state.type] ? t(TYPE_KEYS[state.type]) : state.type])
  if (state.fuel) activeChips.push(['fuel', FUEL_KEYS[state.fuel] ? t(FUEL_KEYS[state.fuel]) : state.fuel])
  if (state.cond) activeChips.push(['cond', state.cond === 'new' ? t('common.new') : t('common.used')])
  if (state.age) activeChips.push(['age', AGE_KEYS[state.age] ? t(AGE_KEYS[state.age]) : state.age])
  if (state.price) activeChips.push(['price', PRICE_KEYS[state.price] ? t(PRICE_KEYS[state.price]) : state.price])
  if (state.transmission) activeChips.push(['transmission', TRANS_KEYS[state.transmission] ? t(TRANS_KEYS[state.transmission]) : state.transmission])
  if (state.drive) activeChips.push(['drive', state.drive])
  if (state.color) activeChips.push(['color', t(`col.${state.color}`)])

  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === pageCount || Math.abs(n - page) <= 2
  )

  const eyebrow = config.eyebrowKey ? t(config.eyebrowKey) : config.eyebrow
  const title = config.titleKey ? t(config.titleKey) : config.title
  const sub = config.subKey ? t(config.subKey) : config.sub

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={[{ label: t('breadcrumb.home'), href: '/' }, { label: title }]} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{eyebrow}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{title}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>{sub}</p>
        </div>
      </section>

      <section className="py-10 md:py-16" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Suspense fallback={<div className="h-24 rounded-2xl bg-white border border-[var(--color-paper-100)]" />}>
              <SearchFilter brands={brands} models={models} colors={colors} basePath={config.base} />
            </Suspense>
          </div>

          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <p className="text-sm" style={{ color: 'var(--color-ink-700)' }}>
              {total === 1 ? t('search.resultOne') : t('search.results', { n: total.toLocaleString() })}
              {pageCount > 1 && <> — {t('search.page', { p: page, total: pageCount })}</>}
            </p>
            <nav className="flex gap-2 flex-wrap" aria-label={t('listing.activeFilters')}>
              {activeChips.map(([key, label]) => (
                <LLink
                  key={key}
                  href={hrefWith(config, state, { [key]: '', page: 1 } as Partial<FilterState>)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-600)] hover:bg-[var(--color-blue-500)] hover:text-white transition-colors"
                >
                  {label} ✕
                </LLink>
              ))}
            </nav>
          </div>

          {items.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((car, i) => (
                  <CarCard key={car.id || i} car={car} />
                ))}
              </div>

              {pageCount > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  {page > 1 && (
                    <LLink href={hrefWith(config, state, { page: page - 1 })} className="px-4 py-2 rounded-lg border bg-white text-sm font-semibold" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>
                      {t('listing.prev')}
                    </LLink>
                  )}
                  {pageNumbers.map((n, idx) => (
                    <span key={n} className="flex items-center gap-2">
                      {idx > 0 && pageNumbers[idx - 1] !== n - 1 && <span style={{ color: 'var(--color-steel-400)' }}>…</span>}
                      <LLink
                        href={hrefWith(config, state, { page: n })}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${n === page ? 'text-white' : 'bg-white border hover:bg-[var(--color-blue-100)]'}`}
                        style={n === page
                          ? { background: 'var(--color-blue-500)' }
                          : { borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}
                      >
                        {n}
                      </LLink>
                    </span>
                  ))}
                  {page < pageCount && (
                    <LLink href={hrefWith(config, state, { page: page + 1 })} className="px-4 py-2 rounded-lg border bg-white text-sm font-semibold" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>
                      {t('listing.next')}
                    </LLink>
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
              <LLink href={config.base} className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
                {t('listing.resetFilters')}
              </LLink>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
