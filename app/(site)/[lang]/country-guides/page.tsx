import type { Metadata } from 'next'
import CountryGuidesPage from '@/src/views/CountryGuidesPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.guidesTitle'),
    description: t('meta.guidesDesc'),
    openGraph: baseOpenGraph(t('meta.guidesTitle'), t('meta.guidesDesc'), '/country-guides', params.lang),
    alternates: hreflangAlternates('/country-guides', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <CountryGuidesPage lang={params.lang} />
}
