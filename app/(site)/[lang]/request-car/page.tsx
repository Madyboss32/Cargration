import type { Metadata } from 'next'
import RequestCarPage from '@/src/views/RequestCarPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.requestTitle'),
    description: t('meta.requestDesc'),
    openGraph: baseOpenGraph(t('meta.requestTitle'), t('meta.requestDesc'), '/request-car', params.lang),
    alternates: hreflangAlternates('/request-car', params.lang),
  }
}

export default function Page() { return <RequestCarPage /> }
