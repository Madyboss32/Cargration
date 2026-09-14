import LLink from '../i18n/LLink'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const STEP_KEYS = [
  { n: 1, details: 3 },
  { n: 2, details: 4 },
  { n: 3, details: 4 },
  { n: 4, details: 4 },
  { n: 5, details: 3 },
]

const INCOTERMS = [
  { code: 'FOB', key: 'fob', href: '/logistics' },
  { code: 'CIP', key: 'cip', href: '/logistics' },
  { code: 'DAP', key: 'dap', href: '/logistics' },
]

export default function B2CCarExportPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const steps = STEP_KEYS.map(({ n, details }) => ({
    num: String(n).padStart(2, '0'),
    title: t(`b2c.s${n}t`),
    desc: t(`b2c.s${n}d`),
    details: Array.from({ length: details }, (_, j) => t(`b2c.s${n}l${j + 1}`)),
  }))
  const faq = [1, 2, 3, 4, 5].map((n) => ({ q: t(`b2c.q${n}`), a: t(`b2c.a${n}`) }))
  const bc: BreadcrumbItem[] = [{ label: t('footer.singleCar') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('b2c.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl" style={{ color: 'var(--color-paper-50)' }}>{t('b2c.title')}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
            {t('b2c.sub')}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <LLink href="/request-car" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('b2c.ctaStart')}
            </LLink>
            <a href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hello, I would like to buy one Chinese car for export.')}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('b2c.ctaWa')}
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-10">
            {[1, 2, 3, 4].map((n) => (
              <span key={n} className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: 'var(--color-steel-700)', color: 'var(--color-paper-50)' }}>
                {t(`b2c.chip${n}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { href: '#steps', label: t('b2c.stepsTitle') },
              { href: '#features', label: t('b2c.featTitle') },
              { href: '#incoterms', label: t('b2c.incTitle') },
              { href: '#faq', label: t('b2c.faqTitle') },
            ].map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-sm font-semibold no-underline border transition-all hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)', background: '#fff' }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('b2c.stepsEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('b2c.stepsTitle')}</h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: 'var(--color-ink-700)' }}>{t('b2c.stepsSub')}</p>
          </div>
          <div className="relative max-w-4xl mx-auto" id="steps">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-paper-100)' }} />
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 mb-12 last:mb-0">
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-lg font-bold font-display text-white z-10" style={{ background: 'var(--color-blue-500)' }}>
                  {step.num}
                </div>
                <div className="flex-1 bg-white rounded-2xl border p-6 md:p-8" style={{ borderColor: 'var(--color-paper-100)' }}>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--color-ink-900)' }}>{step.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: 'var(--color-ink-700)' }}>{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-ink-700)' }}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-blue-500)' }}>
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('b2c.featEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('b2c.featTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex flex-col gap-3 rounded-2xl border bg-white p-6" style={{ borderColor: 'var(--color-paper-100)', borderTop: '3px solid var(--color-blue-500)' }}>
                <h3 className="font-display text-base font-bold leading-snug" style={{ color: 'var(--color-ink-900)' }}>{t(`b2c.f${n}t`)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`b2c.f${n}d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="incoterms" className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('b2c.incEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('b2c.incTitle')}</h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: 'var(--color-ink-700)' }}>{t('b2c.incSub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {INCOTERMS.map((inc) => (
              <div key={inc.code} className="flex flex-col gap-3 rounded-2xl border bg-white p-6" style={{ borderColor: 'var(--color-paper-100)' }}>
                <span className="font-mono text-sm font-bold tracking-wider" style={{ color: 'var(--color-blue-500)' }}>{inc.code}</span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`b2c.${inc.key}D`)}</p>
                <span className="mt-auto text-xs font-semibold px-3 py-1.5 rounded-full self-start" style={{ background: 'var(--color-paper-50)', color: 'var(--color-ink-700)' }}>
                  {t(`b2c.${inc.key}Best`)}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <LLink href="/logistics" className="font-semibold text-sm no-underline underline-offset-4 hover:underline" style={{ color: 'var(--color-blue-600)' }}>
              {t('b2c.logisticsLink')} →
            </LLink>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('b2c.faqEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('b2c.faqTitle')}</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faq.map((e, i) => (
              <details key={i} className="border rounded-xl bg-white overflow-hidden" style={{ borderColor: 'var(--color-paper-100)' }}>
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-sm md:text-base" style={{ color: 'var(--color-ink-900)' }}>
                  {e.q}
                  <span aria-hidden="true" className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg leading-none" style={{ background: 'var(--color-paper-50)', color: 'var(--color-blue-500)' }}>+</span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>
                  {e.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('b2c.ctaTitle')}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('b2c.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/request-car" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('b2c.ctaRequest')}
            </LLink>
            <a href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hello, I would like one Chinese car quoted at FOB price.')}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('b2c.ctaWa')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/payment', key: 'footer.payment' },
              { href: '/warranty', key: 'footer.warranty' },
              { href: '/request-car', key: 'footer.requestCar' },
              { href: '/faq', key: 'footer.faq' },
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