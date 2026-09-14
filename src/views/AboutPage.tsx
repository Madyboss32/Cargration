import LLink from '../i18n/LLink'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import { faqJsonLd, jsonLdScript } from '../lib/jsonld'

const WHATSAPP = WHATSAPP_URL

const badgeValues = ['500+', '42', '200-Point', '7+']

const timelineYears = ['2019', '2020', '2021', '2022', '2023', '2024', '2026']

const valueItems = [
  { icon: '🤝', k: 'vTrust' },
  { icon: '👁', k: 'vTransp' },
  { icon: '🔬', k: 'vQuality' },
  { icon: '⚡', k: 'vSpeed' },
]

export default function AboutPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const badges = badgeValues.map((value, i) => ({ value, label: t(`about.badge${i + 1}`) }))
  const timeline = timelineYears.map((year) => ({ year, title: t(`about.t${year}t`), desc: t(`about.t${year}d`) }))
  const values = valueItems.map(({ icon, k }) => ({ icon, title: t(`about.${k}`), desc: t(`about.${k}D`) }))
  const certs = [1, 2, 3, 4].map((i) => t(`about.cert${i}`))
  const team = [1, 2, 3, 4].map((i) => ({ name: t(`about.team${i}`), desc: t(`about.team${i}D`) }))
  const faqs = [1, 2, 3, 4, 5, 6].map((i) => ({ q: t(`about.q${i}`), a: t(`about.a${i}`) }))
  const bc: BreadcrumbItem[] = [{ label: t('nav.about') }]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))} />
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('about.eyebrow')}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--color-paper-50)' }}>
              {t('about.title')}
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>
              {t('about.sub')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl border" style={{ borderColor: 'var(--color-paper-100)' }}>
                <span className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-blue-500)' }}>{b.value}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-ink-700)' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('about.journeyEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('about.journeyTitle')}</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-paper-100)' }} />
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2" style={{ background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}>{item.year}</span>
                  <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'var(--color-ink-900)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white" style={{ background: 'var(--color-blue-500)' }} />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('about.valuesEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('about.valuesTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl border" style={{ borderColor: 'var(--color-paper-100)' }}>
                <span className="text-3xl">{v.icon}</span>
                <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-ink-900)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('about.certsEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('about.certsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certs.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border bg-white" style={{ borderColor: 'var(--color-paper-100)' }}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0" style={{ color: 'var(--color-green-track)' }}>
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium" style={{ color: 'var(--color-ink-900)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('about.teamEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('about.teamTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl border" style={{ borderColor: 'var(--color-paper-100)' }}>
                <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-ink-900)' }}>{m.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('about.faqTitle')}</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((item, i) => (
              <div key={i} className="border border-[var(--color-paper-100)] rounded-xl bg-white overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-ink-900)' }}>{item.q}</span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-paper-50)] flex items-center justify-center text-lg leading-none transition-transform duration-200 group-open:rotate-45" style={{ color: 'var(--color-blue-500)' }}>+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('about.ctaTitle')}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('about.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/inventory" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('hero.browse')}
            </LLink>
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to learn more about Cargration.')}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('common.chatOnWhatsapp')}
            </a>
            <LLink href="/contact" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('nav.contact')}
            </LLink>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-lg font-bold mb-4 text-center" style={{ color: 'var(--color-ink-900)' }}>{t('nav.howItWorks')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/warranty', key: 'footer.warranty' },
              { href: '/country-guides', key: 'nav.countryGuides' },
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
