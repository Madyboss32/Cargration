import type { Metadata } from 'next'
import TermsPage from '@/src/views/TermsPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.termsTitle'),
    description: t('meta.termsDesc'),
    openGraph: baseOpenGraph(t('meta.termsTitle'), t('meta.termsDesc'), '/terms', params.lang),
    alternates: hreflangAlternates('/terms', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) { return <TermsPage lang={params.lang} /> }
