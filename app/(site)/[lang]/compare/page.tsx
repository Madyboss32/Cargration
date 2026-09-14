import type { Metadata } from 'next'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import CompareView from '@/src/views/CompareView'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('cmp.metaTitle'),
    description: t('cmp.metaDesc'),
    robots: { index: false, follow: false },
    openGraph: baseOpenGraph(t('cmp.metaTitle'), t('cmp.metaDesc'), '/compare', params.lang),
    alternates: hreflangAlternates('/compare', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = createT(getDictionary(params.lang))
  return (
    <main>
      <section className="py-14 md:py-20" style={{ background: 'var(--color-paper-50)', minHeight: '60vh' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest uppercase block mb-2" style={{ color: 'var(--color-blue-500)' }}>{t('cmp.eyebrow')}</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('cmp.h1')}</h1>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: 'var(--color-ink-700)' }}>
              {t('cmp.sub')}
            </p>
          </div>
          <CompareView />
        </div>
      </section>
    </main>
  )
}
