'use client'
import LLink from '../i18n/LLink'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const WHATSAPP = WHATSAPP_URL

export default function WarrantyPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const coverages = [1, 2, 3, 4].map((i) => ({ t: t(`war.c${i}t`), d: t(`war.c${i}d`) }))
  const exclusions = [1, 2, 3, 4, 5, 6].map((i) => t(`war.x${i}`))
  const steps = [1, 2, 3, 4].map((i) => ({ n: String(i).padStart(2, '0'), t: t(`war.s${i}t`), d: t(`war.s${i}d`) }))
  const bc: BreadcrumbItem[] = [{ label: t('footer.warranty') }]

  return (
    <main>
      <section className="relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #1D70B8 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-28">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-wider uppercase mb-4 block text-[#1D70B8]">{t('war.eyebrow')}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--color-paper-50)' }}>
              {t('war.title1')}{' '}
              <span style={{ color: '#1D70B8' }}>{t('war.title2')}</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
              {t('war.sub')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('war.covEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('war.covTitle')}</h2>
            <p className="text-base text-[#555555] max-w-2xl mx-auto mt-3">{t('war.covSub')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {coverages.map((c, i) => (
              <div key={i} className="rounded-xl border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm" style={{ borderColor: '#E7E5E4' }}>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                  <svg viewBox="0 0 20 20" fill="#059669" className="w-4 h-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="font-display text-base font-bold text-[#0A3161] mb-2">{c.t}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('war.excEyebrow')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161] mb-6">{t('war.excTitle')}</h2>
              <p className="text-sm text-[#555555] mb-6">{t('war.excSub')}</p>
              <ul className="space-y-3">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#555555]">
                    <svg viewBox="0 0 20 20" fill="#DC2626" className="w-4 h-4 shrink-0 mt-0.5"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('war.claimEyebrow')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161] mb-6">{t('war.claimTitle')}</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1D70B8] flex items-center justify-center text-sm font-bold font-display text-white shrink-0">{s.n}</div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0A3161] mb-1">{s.t}</h3>
                      <p className="text-sm text-[#555555] leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border bg-blue-50 p-6" style={{ borderColor: '#BFDBFE' }}>
                <h3 className="font-display text-sm font-bold text-[#0A3161] mb-2">{t('war.factoryT')}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{t('war.factoryD')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(29,112,184,.2) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('war.ctaTitle')}</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>{t('war.ctaSub')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to know more about your warranty coverage.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
              {t('war.ctaAsk')}
            </a>
            <LLink href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('war.ctaSupport')}
            </LLink>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/faq', key: 'footer.faq' },
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/inventory', key: 'nav.inventory' },
              { href: '/contact', key: 'nav.contact' },
              { href: '/logistics', key: 'nav.logistics' },
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
