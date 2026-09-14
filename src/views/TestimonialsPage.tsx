'use client'
import { useState, useMemo } from 'react'
import LLink from '../i18n/LLink'
import { getTestimonials } from '../data/testimonials'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const WHATSAPP = WHATSAPP_URL

export default function TestimonialsPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const list = useMemo(() => getTestimonials(lang), [lang])
  const [filter, setFilter] = useState<string>('all')

  const allCountries = useMemo(() => {
    const c = new Set<string>()
    list.forEach((tm) => {
      const parts = tm.author.split(' — ')
      if (parts[1]) c.add(parts[1].split(',')[0].trim())
    })
    return Array.from(c).sort()
  }, [list])

  const filtered = useMemo(() => {
    if (filter === 'all') return list
    return list.filter((tm) => tm.author.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, list])
  const bc: BreadcrumbItem[] = [{ label: t('footer.testimonials') }]

  return (
    <main>
      <section className="relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #1D70B8 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-28">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-wider uppercase mb-4 block text-[#1D70B8]">{t('tes.eyebrow')}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--color-paper-50)' }}>
              {t('tes.title1')}{' '}
              <span style={{ color: '#1D70B8' }}>{t('tes.title2', { n: String(allCountries.length) })}</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
              {t('tes.sub')}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b" style={{ background: '#fff', borderColor: '#E7E5E4' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: 'inherit' }}>
            {[
              { v: '12,400+', k: 'stats.exported' },
              { v: '42', k: 'stats.countries' },
              { v: '98%', k: 'stats.satisfaction' },
              { v: '8', k: 'stats.ports' },
            ].map((s) => (
              <div key={s.k} className="py-6 px-4 text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-[#1D70B8]">{s.v}</div>
                <div className="text-xs text-stone-400 mt-1">{t(s.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setFilter('all')}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ background: filter === 'all' ? '#1D70B8' : '#fff', color: filter === 'all' ? '#fff' : '#555555', border: '1px solid', borderColor: filter === 'all' ? '#1D70B8' : '#E7E5E4' }}>
                {t('tes.all', { n: String(list.length) })}
              </button>
              {allCountries.slice(0, 8).map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{ background: filter === c ? '#1D70B8' : '#fff', color: filter === c ? '#fff' : '#555555', border: '1px solid', borderColor: filter === c ? '#1D70B8' : '#E7E5E4' }}>
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-[#555555]">
              <span className="text-xs font-mono tracking-wider text-[#1D70B8]">{t('tes.reviews', { n: String(filtered.length) })}</span>
              <span className="text-stone-300">·</span>
              <span className="text-xs">
                {t('tes.avg')} {(() => {
                  const avg = Math.round(list.reduce((s, tm) => s + tm.stars, 0) / list.length * 10) / 10
                  return avg.toFixed(1)
                })()} ★
              </span>
            </div>
          </div>

          {filter !== 'all' && (
            <button onClick={() => setFilter('all')} className="mb-6 text-sm text-[#1D70B8] hover:text-[#0A3161] font-semibold">
              {t('tes.clear')}
            </button>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((tm, i) => {
              const [author, location] = tm.author.split(' — ')
              return (
                <div key={i} className="rounded-xl border bg-white p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm" style={{ borderColor: '#E7E5E4' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }, (_, s) => (
                        <svg key={s} viewBox="0 0 20 20" fill={s < tm.stars ? '#1D70B8' : '#E7E5E4'} className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">#{i + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#555555] flex-1">&ldquo;{tm.text}&rdquo;</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-[#0A3161]">{author[0]}</div>
                    <div>
                      <p className="text-xs font-semibold text-[#0A3161]">{author}</p>
                      {location && <p className="text-[10px] text-stone-400">{location}</p>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-[#555555]">{t('tes.none')}</p>
              <button onClick={() => setFilter('all')} className="mt-3 text-sm font-semibold text-[#1D70B8] hover:text-[#0A3161]">{t('tes.viewAll')}</button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-[#555555] mb-4">{t('tes.share')}</p>
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to submit a testimonial about my experience with Cargration.')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
              {t('tes.leave')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(29,112,184,.2) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('tes.ctaTitle')}</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('tes.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/inventory" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
              {t('tes.ctaInv')}
            </LLink>
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to learn more about exporting vehicles from China.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('tes.ctaChat')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/about', key: 'nav.about' },
              { href: '/request-car', key: 'footer.requestCar' },
              { href: '/country-guides', key: 'nav.countryGuides' },
              { href: '/faq', key: 'footer.faq' },
              { href: '/inventory', key: 'nav.inventory' },
              { href: '/how-it-works', key: 'nav.howItWorks' },
            ].map((l) => (
              <LLink key={l.href} href={l.href} className="flex items-center justify-between rounded-xl border bg-white px-5 py-3 text-sm font-semibold no-underline transition-all hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-900)' }}>
                {t(l.key)}
                <span aria-hidden="true" style={{ color: 'var(--color-blue-500)' }}>→</span>
              </LLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
