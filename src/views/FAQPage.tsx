import LLink from '../i18n/LLink'
import FAQAccordion from '../components/FAQAccordion'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const WHATSAPP = WHATSAPP_URL

export default function FAQPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const bc: BreadcrumbItem[] = [{ label: t('footer.faq') }]
  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('faqp.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-paper-50)' }}>{t('faqp.title')}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <FAQAccordion lang={lang} />
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('faqp.exploreEyebrow')}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('faqp.exploreTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { to: '/how-it-works', key: 'nav.howItWorks' },
              { to: '/logistics', key: 'nav.logistics' },
              { to: '/inspection', key: 'nav.inspection' },
              { to: '/warranty', key: 'footer.warranty' },
              { to: '/payment', key: 'footer.payment' },
              { to: '/country-guides', key: 'nav.countryGuides' },
            ].map((tile) => (
              <LLink
                key={tile.to}
                href={tile.to}
                className="flex items-center justify-between rounded-xl border bg-white px-5 py-4 text-sm font-semibold no-underline transition-all hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]"
                style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-900)' }}
              >
                {t(tile.key)}
                <span aria-hidden="true" style={{ color: 'var(--color-blue-500)' }}>→</span>
              </LLink>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('faqp.stillT')}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('faqp.stillD')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I have a question about vehicle export from China.')}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-whatsapp)', color: '#fff' }}>
              {t('blg.chatWa')}
            </a>
            <LLink href="/contact" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('faqp.form')}
            </LLink>
          </div>
        </div>
      </section>
    </main>
  )
}
