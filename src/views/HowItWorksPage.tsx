import LLink from '../i18n/LLink'
import FAQAccordion from '../components/FAQAccordion'
import { WHATSAPP_URL, SITE } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const WHATSAPP = WHATSAPP_URL

const STEP_KEYS = [
  { n: 1, details: 4 },
  { n: 2, details: 7 },
  { n: 3, details: 5 },
  { n: 4, details: 5 },
  { n: 5, details: 4 },
]

export default function HowItWorksPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const steps = STEP_KEYS.map(({ n, details }) => ({
    num: String(n).padStart(2, '0'),
    title: t(`how.s${n}t`),
    desc: t(`how.s${n}d`),
    details: Array.from({ length: details }, (_, j) => t(`how.s${n}l${j + 1}`)),
  }))
  const bc: BreadcrumbItem[] = [{ label: t('nav.howItWorks') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('how.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('how.title')}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
            {t('how.sub')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { href: '#steps', label: t('how.eyebrow') },
              { href: '#documents', label: t('how.docsTitle') },
              { href: '#faq', label: t('how.faqTitle') },
            ].map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-sm font-semibold no-underline border transition-all hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)', background: '#fff' }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="relative max-w-4xl mx-auto" id="steps">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-paper-100)' }} />
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 mb-12 last:mb-0">
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-lg font-bold font-display text-white z-10" style={{ background: 'var(--color-blue-500)' }}>
                  {step.num}
                </div>
                <div className="flex-1 bg-white rounded-2xl border p-6 md:p-8" style={{ borderColor: 'var(--color-paper-100)' }}>
                  <h2 className="font-display text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--color-ink-900)' }}>{step.title}</h2>
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

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border" style={{ borderColor: 'var(--color-paper-100)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-display text-white" style={{ background: 'var(--color-blue-500)' }}>
                  {step.num}
                </div>
                <h3 className="font-display text-sm font-bold" style={{ color: 'var(--color-ink-900)' }}>{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('how.docsEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('how.docsTitle')}</h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: 'var(--color-ink-700)' }}>{t('how.docsSub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex flex-col gap-3 rounded-2xl border bg-white p-5" style={{ borderColor: 'var(--color-paper-100)', borderTop: '3px solid var(--color-blue-500)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-display text-white" style={{ background: 'var(--color-navy-950)' }}>{String(n).padStart(2, '0')}</div>
                <h3 className="font-display text-sm font-bold leading-snug" style={{ color: 'var(--color-ink-900)' }}>{t(`how.doc${n}`)}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`how.doc${n}d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('how.faqEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('how.faqTitle')}</h2>
          </div>
          <FAQAccordion lang={lang} />
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('how.ctaTitle')}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('how.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/inventory" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('hero.browse')}
            </LLink>
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to learn about the buying process.')}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('common.chatOnWhatsapp')}
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
