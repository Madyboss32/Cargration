'use client'
import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { ports, priceRanges } from '../data/catalog'
import { getTestimonials } from '../data/testimonials'
import { getPosts } from '../data/blog'
import { manifestEntries } from '../data/manifest'
import HeroSearch from '../components/HeroSearch'
import VehicleCarousel from '../components/VehicleCarousel'
import FAQAccordion from '../components/FAQAccordion'
import CarCard from '../components/CarCard'
import useScrollAnimation from '../hooks/useScrollAnimation'
import type { CatalogItem, BlogPost, Testimonial, ManifestEntry } from '../types'
import { WHATSAPP_URL } from '../config/site'
import LLink from '../i18n/LLink'
import { localeHref } from '../i18n/LLink'
import { useI18n } from '../i18n/I18nProvider'

interface HomePageProps {
  brands: string[]
  topBrands: string[]
  totalCars: number
  preview: CatalogItem[]
  trending: CatalogItem[]
  suvs: CatalogItem[]
  evs: CatalogItem[]
}

const WA = WHATSAPP_URL
const A = '#1D70B8'
const NAVY = '#0A3161'

const heroImgs = [
  '/assets/img/cars/byd-seal.webp', '/assets/img/cars/chery-tiggo-8-pro.webp',
  '/assets/img/cars/nio-et7.webp', '/assets/img/cars/aito-m9.webp',
  '/assets/img/cars/zeekr-007.webp', '/assets/img/cars/byd-han-ev.webp',
]

function Counter({ target, s = '', p = '' }: { target: number; s?: string; p?: string }) {
  const [c, setC] = useState(0)
  const [start, setStart] = useState(false)
  const r = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = r.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStart(true) }, { threshold: .3 })
    o.observe(el); return () => o.disconnect()
  }, [])
  useEffect(() => {
    if (!start) return; let v = 0; const inc = target / (2000 / 16); let raf: number
    const fn = () => { v += inc; if (v >= target) { setC(target); return }; setC(Math.floor(v)); raf = requestAnimationFrame(fn) }
    raf = requestAnimationFrame(fn); return () => cancelAnimationFrame(raf)
  }, [start, target])
  return <span ref={r}>{p}{c.toLocaleString()}{s}</span>
}

function Reveal({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
  const [ref, v] = useScrollAnimation({ threshold: .08 })
  return <div ref={ref} style={{ opacity: 0, transform: 'translateY(18px)', transition: `opacity .5s ease-out ${d}s, transform .5s ease-out ${d}s`, ...(v ? { opacity: 1, transform: 'translateY(0)' } : {}) }}>{children}</div>
}

type IconName = 'search' | 'clipboard' | 'document' | 'ship' | 'train' | 'box' | 'shield' | 'globe' | 'check' | 'arr' | 'wa' | 'bolt' | 'bar3'

function Icon({ n, s = 20 }: { n: IconName; s?: number }) {
  const m: Record<IconName, React.ReactElement | null> = {
    search: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    clipboard: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>,
    document: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    ship: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 21c.6.5 1.2 1 2 1 1.6 0 2.4-.8 4-1s2.4 1 4 1 2.4-1 4-1 2.4 1 4 1c.8 0 1.4-.5 2-1"/><path d="M4 18l1-5h14l1 5"/><path d="M8 10V6l3-1 3 1v4"/><path d="M7 13h10"/></svg>,
    train: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 12h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>,
    box: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    shield: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    globe: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    check: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
    arr: <svg viewBox="0 0 20 20" fill="currentColor" width={s} height={s}><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"/></svg>,
    wa: <svg viewBox="0 0 24 24" fill="currentColor" width={s} height={s}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    bolt: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    bar3: <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  }
  return m[n] || null
}

export default function HomePage({ brands, topBrands, totalCars, preview, trending, suvs, evs }: HomePageProps) {
  const router = useRouter()
  const { t, lang } = useI18n()
  const [hi, setHi] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setHi(i => (i + 1) % heroImgs.length), 4500)
    return () => clearInterval(t)
  }, [])

  const go = useCallback((params: Record<string, string>) => {
    const p = new URLSearchParams()
    for (const [k, v] of Object.entries(params)) {
      if (!v) continue
      if (k === 'type' && v === 'ev') p.set('fuel', 'Electric')
      else p.set(k, v)
    }
    const qs = p.toString()
    router.push(localeHref(qs ? `/inventory?${qs}` : '/inventory'))
  }, [router])
  const qf = (q: { type?: string; brand?: string; price?: string; port?: string }) => {
    go(q as Record<string, string>)
  }
  const goPage = (href: string) => () => router.push(localeHref(href))

  const tC = trending
  const suvC = suvs
  const evC = evs

  const inventoryPreviews = preview
  const testimonials3 = getTestimonials(lang).slice(0, 3)
  const blog3 = getPosts(lang).slice(0, 3)
  const priceKeys = ['heroPrice.under8k', 'heroPrice.8to15k', 'heroPrice.15to25k', 'heroPrice.over25k']
  const priceL = priceRanges.map((r, i) => ({ l: t(priceKeys[i] || r.label), fn: () => qf({ price: `${r.min}-${r.max}` }) }))

  return (
    <div className="bg-white min-h-screen">
      {/* ──────────────── HERO ──────────────── */}
      <section className="hero-band relative overflow-hidden">
        <div className="absolute inset-0 opacity-[.05]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
        {heroImgs.map((src, i) => (
          <div key={src} className="absolute inset-0 transition-all duration-[1200ms]" style={{ opacity: i === hi ? .09 : 0, transform: i === hi ? 'scale(1)' : 'scale(1.07)' }}>
            <Image src={src} alt="" fill priority={i === 0} className="object-cover" sizes="100vw" />
          </div>
        ))}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 font-mono tracking-wider border border-white/15 bg-white/5 backdrop-blur-sm" style={{ fontSize: '.7rem', color: 'var(--color-steel-200)' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-whatsapp)' }} />
              {t('hero.badge')}
            </div>
            <h1 className="font-display font-bold leading-[1.06] tracking-tight text-white mb-4" style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.75rem)' }}>
              {t('hero.title1')}
              <br />
              <span style={{ color: '#7FB2E8' }}>{t('hero.title2')}</span>
            </h1>
            <p className="max-w-2xl leading-relaxed mb-8 text-base md:text-lg" style={{ color: 'var(--color-steel-200)' }}>
              {t('hero.sub')}
            </p>

            <div className="w-full max-w-2xl mb-6 rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur md:p-4">
              <HeroSearch brands={brands} />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="mr-1 font-medium" style={{ color: 'var(--color-steel-400)' }}>{t('hero.quickFilters')}:</span>
              {[['type.suv', { type: 'suv' }], ['type.ev', { type: 'ev' }], ['type.sedan', { type: 'sedan' }], ['heroPrice.under10k', { price: '0-10000' }] ].map(([k, params]) => (
                <button
                  key={k as string}
                  onClick={() => qf(params as { type?: string; price?: string })}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
                  style={{ fontSize: '.8rem', color: 'var(--color-steel-200)' }}
                >
                  {t(k as string)}
                </button>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-7 md:grid-cols-5">
            {[
              { v: 12400, s: '+', k: 'stats.exported' },
              { v: 42, k: 'stats.countries' },
              { v: 20800, s: '+', k: 'stats.catalog' },
              { v: 98, s: '%', k: 'stats.satisfaction' },
              { v: 8, k: 'stats.ports' },
            ].map((s, i) => (
              <div key={i} className="px-2 text-center md:text-left">
                <div className="font-display text-2xl font-bold text-white md:text-[1.7rem]"><Counter target={s.v} s={s.s || ''} /></div>
                <div className="mt-0.5 text-xs" style={{ color: 'var(--color-steel-400)' }}>{t(s.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── SHIPMENT TICKER ──────────────── */}
      <section className="py-2.5 overflow-hidden bg-[#F7FAFA] border-b border-stone-100">
        <div className="flex gap-3 whitespace-nowrap" style={{ animation: 'ticker-scroll 35s linear infinite' }}>
          {[...manifestEntries, ...manifestEntries, ...manifestEntries].map((e, i) => (
            <div key={`${i}-${e.vessel}`} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono border border-stone-200 bg-white/60">
              <span className={`w-1.5 h-1.5 rounded-full ${e.status === 'DEPARTED' ? 'bg-emerald-500' : e.status === 'LOADING' ? 'bg-amber-400' : 'bg-sky-400'}`} />
              <span className="font-semibold text-[#0A3161]">{e.vessel}</span>
              <span className="text-stone-400">{e.route}</span>
              <span className="text-stone-400">{e.units} units</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-50 text-[#1D70B8]">{e.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── INVENTORY PREVIEW (like Guazi's car cards) ──────────────── */}
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="section-head mb-8">
            <div>
              <span className="eyebrow">{t('home.featured')}</span>
              <h2>{t('home.readyToShip')}</h2>
            </div>
            <LLink href="/inventory" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#1D70B8] hover:text-[#0A3161] transition-colors">
              {t('home.viewAll')} <Icon n="arr" s={14} />
            </LLink>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {inventoryPreviews.map((car: CatalogItem, i: number) => (
              <CarCard key={car.id} car={car} index={i} compact />
            ))}
          </div>

          <div className="text-center mt-6 sm:hidden">
            <LLink href="/inventory" className="inline-flex items-center gap-1 text-sm font-semibold text-[#1D70B8] hover:text-[#0A3161] transition-colors">
              {t('home.viewAllVehicles')} <Icon n="arr" s={14} />
            </LLink>
          </div>
        </div>
      </section>

      {/* ──────────────── BROWSE BY ──────────────── */}
      <section className="py-12 bg-[#F7FAFA] border-y border-stone-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{t('home.browseBy')}</span>
                <h2>{t('home.brandTypePrice')}</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Brands */}
            <Reveal d={.05}>
              <div>
                <h3 className="font-display text-sm font-bold text-[#555555] mb-4">{t('home.popularBrands')}</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.slice(0, 15).map((brand) => (
                    <button key={brand} onClick={() => qf({ brand })}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-stone-200 text-[#555555] hover:border-[#1D70B8]/40 hover:text-[#0A3161] hover:bg-blue-50/50 transition-all">
                      {brand}
                    </button>
                  ))}
                  <LLink href="/inventory" className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#1D70B8] hover:text-[#0A3161] border border-dashed border-blue-200 hover:border-[#1D70B8]/40 transition-all">
                    {t('home.moreBrands', { n: 5 })}
                  </LLink>
                  <LLink href="/brands" className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1D70B8] hover:text-[#0A3161] border border-dashed border-blue-200 hover:border-[#1D70B8]/40 transition-all">
                    All Chinese Car Brands →
                  </LLink>
                </div>
              </div>
            </Reveal>

            <div className="hidden lg:block w-px h-40 bg-stone-200 self-center" />

            {/* Types + Price */}
            <Reveal d={.1}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display text-sm font-bold text-[#555555] mb-4">{t('home.byType')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { k: 'type.suv', t: 'suv' },
                      { k: 'type.sedan', t: 'sedan' },
                      { k: 'type.ev', t: 'ev' },
                      { k: 'type.pickup', t: 'pickup' },
                    ].map((c) => (
                      <button key={c.t} onClick={() => qf({ type: c.t })}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-white border border-stone-200 text-[#555555] hover:border-[#1D70B8]/40 hover:text-[#0A3161] hover:bg-blue-50/50 transition-all">
                        {t(c.k)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#555555] mb-4">{t('home.byPrice')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceL.map((p, i) => (
                      <button key={i} onClick={p.fn}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-white border border-stone-200 text-[#555555] hover:border-[#1D70B8]/40 hover:text-[#0A3161] hover:bg-blue-50/50 transition-all">
                        {p.l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────── VEHICLE CAROUSELS ──────────────── */}
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
          <div className="section-head section-head--row">
              <div>
                <span className="eyebrow">{t('home.categoriesEyebrow')}</span>
                <h2>{t('home.shopByCategory')}</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-6">
            {/* ──── LEFT SIDEBAR: FILTERS ──── */}
            <aside className="hidden lg:flex flex-col gap-4">
              {[
                {
                  t: 'home.byType',
                  items: [
                    { l: t('type.suv'), fn: () => qf({ type: 'suv' }) },
                    { l: t('type.sedan'), fn: () => qf({ type: 'sedan' }) },
                    { l: t('type.ev'), fn: () => qf({ type: 'ev' }) },
                    { l: t('type.mpv'), fn: () => qf({ type: 'mpv' }) },
                    { l: t('type.pickup'), fn: () => qf({ type: 'pickup' }) },
                  ],
                },
                {
                  t: 'home.byPrice',
                  items: priceRanges.map((r, i) => ({ l: priceL[i]?.l || r.label, fn: () => qf({ price: `${r.min}-${r.max}` }) })),
                },
                {
                  t: 'home.popularBrands',
                  items: topBrands.slice(0, 6).map((b) => ({ l: b, fn: () => qf({ brand: b }) })),
                },
                {
                  t: 'home.quickLinks',
                  items: [
                    { l: t('home.newArrivals'), fn: goPage('/inventory?sort=newest') },
                    { l: t('nav.newCars'), fn: goPage('/new-cars') },
                    { l: t('nav.usedCars'), fn: goPage('/used-cars') },
                    { l: t('nav.evs'), fn: goPage('/evs') },
                  ],
                },
              ].map((sec, i) => (
                <div key={i} className="rounded-xl p-4 flex flex-col gap-1 bg-white border border-stone-200">
                  <h3 className="font-display text-xs font-bold uppercase tracking-widest mb-1 text-stone-400">{t(sec.t)}</h3>
                  {sec.items.map((item, j) => (
                    <button key={j} onClick={item.fn}
                      className="text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 flex items-center justify-between group text-[#555555] hover:text-[#0A3161]">
                      <span>{item.l}</span>
                      <Icon n="arr" s={12} />
                    </button>
                  ))}
                </div>
              ))}
              <LLink href="/inventory"
                className="text-center text-sm font-semibold py-2.5 rounded-xl bg-[#1D70B8] text-white hover:bg-[#1555A0] transition-all duration-200">
                {t('home.viewAllVehicles')}
              </LLink>
            </aside>

            {/* ──── CENTER: CAROUSELS ──── */}
            <div className="flex flex-col gap-10">
              <VehicleCarousel title={t('home.trending')} vehicles={tC} count={tC.length} />
              <VehicleCarousel title={t('home.newSuvs')} vehicles={suvC} count={suvC.length} />
              <VehicleCarousel title={t('home.evs')} vehicles={evC} count={evC.length} />
            </div>

            {/* ──── RIGHT SIDEBAR: MARKET INTEL + HELP ──── */}
            <aside className="hidden lg:flex flex-col gap-4">
              <div className="rounded-xl p-4 flex flex-col gap-2 bg-white border border-stone-200">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest mb-1 text-stone-400">{t('home.marketIntel')}</h3>
                {blog3.map((p: BlogPost) => (
                  <LLink key={p.id} href={`/blog-post/${p.slug}`}
                    className="group flex flex-col gap-1 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1D70B8]">{p.cat}</span>
                    <span className="text-sm font-semibold leading-snug group-hover:text-[#0A3161] transition-colors text-[#0A3161]">{p.title}</span>
                    <span className="text-xs text-stone-400">{p.date}</span>
                  </LLink>
                ))}
                <LLink href="/blog" className="text-xs font-semibold text-[#1D70B8] hover:text-[#0A3161] transition-colors mt-1">
                  {t('home.blogMore')} →
                </LLink>
              </div>

              <div className="rounded-xl p-5 flex flex-col gap-3 bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <h3 className="font-display text-sm font-bold text-[#0A3161]">{t('home.helpTitle')}</h3>
                <p className="text-sm leading-relaxed text-[#555555]">{t('home.helpBody')}</p>
                <a href={`${WA}?text=${encodeURIComponent('Hello, I need help with vehicle export from China.')}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 bg-[#1D70B8] text-white hover:bg-[#1555A0]">
                  <Icon n="wa" s={16} />
                  {t('home.talkAdvisor')}
                </a>
              </div>

              <div className="rounded-xl p-4 bg-white border border-stone-200">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest mb-3 text-stone-400">{t('home.quickStats')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555555]">{t('common.vehicles').charAt(0).toUpperCase() + t('common.vehicles').slice(1)}</span>
                    <span className="font-semibold text-[#0A3161]">{totalCars}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555555]">{t('home.brandsLabel')}</span>
                    <span className="font-semibold text-[#0A3161]">{brands.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555555]">{t('home.portsLabel')}</span>
                    <span className="font-semibold text-[#0A3161]">{ports.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555555]">{t('home.countriesLabel')}</span>
                    <span className="font-semibold text-[#0A3161]">42</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ──────────────── HOW IT WORKS ──────────────── */}
      <section className="py-14 bg-[#F7FAFA] border-y border-stone-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{t('home.processEyebrow')}</span>
                <h2>{t('detail.processTitle')}</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { n: '01', k: '1' },
              { n: '02', k: '2' },
              { n: '03', k: '3' },
              { n: '04', k: '4' },
              { n: '05', k: '5' },
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col gap-3 p-5 rounded-xl bg-white border border-stone-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-blue-200">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-display bg-[#1D70B8] text-white">{s.n}</div>
                <h3 className="font-display text-sm font-bold text-[#0A3161]">{t(`home.step${s.k}`)}</h3>
                <p className="text-xs leading-relaxed text-stone-400">{t(`home.step${s.k}d`)}</p>
              </div>
            ))}
            <div className="hidden md:block absolute top-9 left-[calc(10%+2.25rem)] right-[calc(10%+2.25rem)] h-px bg-stone-200 -z-10" />
          </div>
          <div className="text-center mt-8">
            <LLink href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D70B8] hover:text-[#0A3161] transition-colors">
              {t('nav.howItWorks')} <Icon n="arr" s={14} />
            </LLink>
          </div>
        </div>
      </section>

      {/* ──────────────── SERVICES ──────────────── */}
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#1D70B8]">{t('home.servicesEyebrow')}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A3161] mt-1 mb-8">{t('home.servicesTitle')}</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: 'search', k: '1', href: '/inventory' },
              { icon: 'clipboard', k: '2', href: '/inspection' },
              { icon: 'document', k: '3', href: '/how-it-works' },
              { icon: 'ship', k: '4', href: '/logistics' },
              { icon: 'train', k: '5', href: '/logistics' },
              { icon: 'box', k: '6', href: '/logistics' },
              { icon: 'shield', k: '7', href: '/warranty' },
              { icon: 'globe', k: '8', href: '/country-guides' },
            ].map((s, i) => (
              <LLink key={i} href={s.href} className="group rounded-xl p-4 flex flex-col gap-2.5 bg-white border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-[#1D70B8] group-hover:scale-110 transition-transform">
                  <Icon n={s.icon as IconName} s={16} />
                </div>
                <h3 className="font-display text-sm font-bold text-[#0A3161]">{t(`home.svc${s.k}`)}</h3>
                <p className="text-xs leading-relaxed text-stone-400">{t(`home.svc${s.k}d`)}</p>
              </LLink>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── B2C SINGLE CAR ──────────────── */}
      <section className="py-14" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase mb-3 block" style={{ color: '#7FB2E8' }}>{t('b2c.eyebrow')}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--color-paper-50)' }}>{t('b2c.title')}</h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-xl" style={{ color: 'var(--color-steel-200)' }}>{t('b2c.sub')}</p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <span key={n} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15" style={{ color: 'var(--color-paper-50)' }}>
                      {t(`b2c.chip${n}`)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-4">
                <LLink href="/b2c-car-export" className="w-full lg:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-sm" style={{ background: '#1D70B8', color: '#fff' }}>
                  {t('b2c.ctaStart')} <span className="ml-1">→</span>
                </LLink>
                <a href={`${WA}?text=${encodeURIComponent('Hello, I would like to buy one Chinese car for export.')}`} target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/20 transition-colors hover:border-white/40" style={{ color: 'var(--color-paper-50)' }}>
                  <Icon n="wa" s={16} /> <span>{t('b2c.ctaWa')}</span>
                </a>
                <LLink href="/inventory" className="text-xs font-semibold transition-colors hover:underline" style={{ color: '#7FB2E8' }}>
                  {t('b2c.ctaBrowse')} <Icon n="arr" s={12} />
                </LLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────── SHIPPING + CIF / CIP ──────────────── */}
      <section className="py-8" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border border-stone-200 p-6 md:p-8 grid lg:grid-cols-[1fr_auto] gap-6 items-center bg-gradient-to-r from-blue-50/60 to-white">
              <div>
                <h2 className="font-display text-lg md:text-xl font-bold text-[#0A3161] mb-1">{t('home.shipCipT')}</h2>
                <p className="text-sm leading-relaxed text-[#555555] max-w-2xl">{t('home.shipCipD')}</p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <span className="px-3 py-1.5 rounded-lg text-xs font-bold font-mono text-[#1D70B8] bg-white border border-blue-200">FOB</span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-bold font-mono text-[#1D70B8] bg-white border border-blue-200">CIF</span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-bold font-mono text-white border border-[#1D70B8] bg-[#1D70B8]">CIP</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────── WHY + DESTINATIONS ──────────────── */}
      <section className="py-14 bg-[#F7FAFA] border-y border-stone-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#1D70B8]">{t('home.whyEyebrow')}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A3161] mt-1 mb-6">{t('home.whyTitle')}</h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['1', '2', '3', '4'].map((k) => (
                  <div key={k} className="rounded-xl p-4 bg-white border border-stone-200 border-l-4 transition-all duration-200 hover:shadow-sm" style={{ borderLeftColor: A }}>
                    <div className="w-5 h-5 flex items-center justify-center text-[#1D70B8] mb-1.5">
                      <Icon n="check" s={12} />
                    </div>
                    <h3 className="font-display text-sm font-bold text-[#0A3161] mb-1">{t(`home.why${k}`)}</h3>
                    <p className="text-xs leading-relaxed text-stone-400">{t(`home.why${k}d`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Reveal d={.1}>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#1D70B8]">{t('home.reachEyebrow')}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A3161] mt-1 mb-3">{t('home.reachTitle')}</h2>
                <p className="text-sm text-stone-400 mb-5">{t('home.reachSub')}</p>
              </Reveal>
              <div className="flex flex-wrap gap-2">
                {['Russia','Kazakhstan','Uzbekistan','Belarus','Ukraine','Nigeria','Ghana','Algeria',"Côte d'Ivoire",'UAE','Saudi Arabia','Iraq','Iran','Poland','Bolivia','Colombia','Venezuela','Oman','Qatar','Tajikistan','Azerbaijan','Yemen'].map((d, i) => (
                  <span key={d}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-default border"
                    style={{
                      background: i < 8 ? '#DBEAFE' : '#fff',
                      borderColor: i < 8 ? '#BFDBFE' : '#E7E5E4',
                      color: i < 8 ? '#1E40AF' : '#78716C',
                    }}>
                    {d}
                  </span>
                ))}
              </div>
              <LLink href="/country-guides" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#1D70B8] hover:text-[#0A3161] transition-colors">
                {t('nav.countryGuides')} <Icon n="arr" s={14} />
              </LLink>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── TESTIMONIALS ──────────────── */}
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#1D70B8]">{t('footer.testimonials')}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0A3161] mt-1">{t('home.testimonialsTitle')}</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials3.map((tm: Testimonial, i) => (
              <div key={i} className="rounded-xl p-5 bg-white border border-stone-200 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: tm.stars }, (_, s) => (
                    <svg key={s} viewBox="0 0 20 20" fill="#1D70B8" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#555555] flex-1">&ldquo;{tm.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-[#0A3161]">{tm.author[0]}</div>
                  <div>
                    <p className="text-xs font-semibold text-[#0A3161]">{tm.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FAQ + BLOG ──────────────── */}
      <section className="py-14 bg-[#F7FAFA] border-y border-stone-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
            <div>
              <Reveal>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#1D70B8]">{t('footer.faq')}</span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-[#0A3161] mt-1 mb-6">{t('home.faqTitle')}</h2>
              </Reveal>
               <FAQAccordion lang={lang} />
              <div className="mt-4">
                <LLink href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D70B8] hover:text-[#0A3161] transition-colors">
                  {t('home.viewAll')} {t('footer.faq')} <Icon n="arr" s={14} />
                </LLink>
              </div>
            </div>
            <div>
              <Reveal d={.05}>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#1D70B8]">{t('footer.blogNews')}</span>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0A3161] mt-1">{t('home.blogTitle')}</h2>
                  </div>
                  <LLink href="/blog" className="text-xs font-semibold text-[#1D70B8] hover:text-[#0A3161]">{t('home.viewAll')}</LLink>
                </div>
              </Reveal>
              <div className="flex flex-col gap-3">
                {blog3.map((p: BlogPost) => (
                  <LLink key={p.id} href={`/blog-post/${p.slug}`}
                    className="group rounded-xl p-4 bg-white border border-stone-200 hover:border-blue-200 transition-all duration-200">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1D70B8]">{p.cat}</span>
                    <h3 className="font-display text-sm font-bold text-[#0A3161] group-hover:text-[#0A3161] transition-colors mt-1">{p.title}</h3>
                    <p className="text-xs text-stone-400 mt-1 line-clamp-2">{p.excerpt}</p>
                    <span className="text-[10px] text-stone-400 mt-2 block">{p.date}</span>
                  </LLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7FAFA] via-white to-blue-50/40" />
        <div className="absolute inset-0 opacity-[.02]" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161] mb-3">{t('cta.title')}</h2>
            <p className="text-base text-[#555555] mb-8 max-w-xl mx-auto">
              {t('cta.body')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LLink href="/inventory" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-[#1D70B8] text-white hover:bg-[#1555A0] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                {t('hero.browse')} <Icon n="arr" s={14} />
              </LLink>
              <a href={`${WA}?text=${encodeURIComponent('Hello, I would like to get started with vehicle export from China.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-stone-300 text-[#555555] hover:border-[#1D70B8]/40 hover:text-[#1D70B8] transition-all duration-200 hover:-translate-y-0.5">
                <Icon n="wa" s={16} />
                {t('common.chatOnWhatsapp')}
              </a>
              <LLink href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-stone-300 text-[#555555] hover:border-[#1D70B8]/40 hover:text-[#1D70B8] transition-all duration-200 hover:-translate-y-0.5">
                {t('nav.contact')}
              </LLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
