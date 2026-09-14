import LLink from '../i18n/LLink'
import { countryGuides, getCountryMeta } from '../data/countryGuides'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

export default function CountryGuidesPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const metaMap = getCountryMeta(lang)
  const countries = Object.entries(countryGuides)
    .map(([slug, data]) => ({ ...data, slug, ...(metaMap[slug] || { name: slug, region: 'Other', flag: '🌍', transitShort: '' }) }))
    .sort((a, b) => a.name.localeCompare(b.name))
  const bc: BreadcrumbItem[] = [{ label: t('nav.countryGuides') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('gd.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('gd.title')}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
            {t('gd.sub')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((c) => (
              <LLink key={c.slug} href={`/country-guide/${c.slug}`}
                className="flex items-center gap-4 p-4 rounded-xl border bg-white transition-all hover:border-[var(--color-blue-500)] hover:translate-y-[-2px] hover:shadow-md"
                style={{ borderColor: 'var(--color-paper-100)', textDecoration: 'none' }}
              >
                <span className="text-2xl">{c.flag}</span>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-sm" style={{ color: 'var(--color-ink-900)' }}>{c.name}</span>
                  <span className="text-xs" style={{ color: 'var(--color-ink-700)' }}>{c.region} · {c.transitShort}</span>
                </div>
                <span className="ml-auto text-sm" style={{ color: 'var(--color-blue-500)' }}>→</span>
              </LLink>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('gd.insideEyebrow')}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('gd.insideTitle')}</h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: 'var(--color-ink-700)' }}>{t('gd.insideSub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="flex items-start gap-3 rounded-xl border bg-white p-5" style={{ borderColor: 'var(--color-paper-100)' }}>
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display text-white" style={{ background: 'var(--color-blue-500)' }}>{n}</span>
                <div>
                  <h3 className="font-display text-sm font-bold mb-1" style={{ color: 'var(--color-ink-900)' }}>{t(`gd.in${n}t`)}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`gd.in${n}d`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('gd.noCountryT')}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('gd.noCountryD')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/contact" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('gd.contactTeam')}
            </LLink>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('blg.chatWa')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
