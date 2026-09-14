import type { Metadata } from 'next'
import LogisticsPage from '@/src/views/LogisticsPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { SITE } from '@/src/config/site'
import { serviceJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.logisticsTitle'),
    description: t('meta.logisticsDesc'),
    openGraph: baseOpenGraph(t('meta.logisticsTitle'), t('meta.logisticsDesc'), '/logistics', params.lang),
    alternates: hreflangAlternates('/logistics', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = createT(getDictionary(params.lang))
  const url = `${SITE.url}/${params.lang === 'en' ? '' : params.lang + '/'}logistics`
  const block = serviceJsonLd({
    name: t('log.title'),
    description: t('log.sub'),
    url,
    serviceType: 'vehicle logistics',
  })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(block)} />
      <LogisticsPage lang={params.lang} />
    </>
  )
}
