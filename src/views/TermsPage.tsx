import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import LLink from '../i18n/LLink'

const SECTIONS = [1, 2, 3, 4, 5, 6, 7, 8] as const

export default function TermsPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const bc: BreadcrumbItem[] = [{ label: t('footer.terms') }]
  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-paper-50)' }}>{t('toc.h1')}</h1>
          <p className="text-sm mt-3" style={{ color: 'var(--color-steel-200)' }}>{t('toc.upd')}</p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>
            {SECTIONS.map((n) => (
              <div key={n}>
                <h2 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--color-ink-900)' }}>{t(`toc.s${n}t`)}</h2>
                <p>{t(`toc.s${n}d`)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t flex flex-wrap gap-3" style={{ borderColor: 'var(--color-paper-100)' }}>
            <LLink href="/contact" className="text-xs font-semibold px-3 py-1.5 rounded-lg border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-blue-600)' }}>{t('nav.contact')}</LLink>
            <LLink href="/warranty" className="text-xs font-semibold px-3 py-1.5 rounded-lg border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-blue-600)' }}>{t('footer.warranty')}</LLink>
            <LLink href="/faq" className="text-xs font-semibold px-3 py-1.5 rounded-lg border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-blue-600)' }}>{t('footer.faq')}</LLink>
          </div>
        </div>
      </section>
    </main>
  )
}
