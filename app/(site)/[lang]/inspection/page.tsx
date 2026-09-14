import type { Metadata } from 'next'
import InspectionPage from '@/src/views/InspectionPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { SITE } from '@/src/config/site'
import { serviceJsonLd, faqJsonLd, graphJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.inspectionTitle'),
    description: t('meta.inspectionDesc'),
    openGraph: baseOpenGraph(t('meta.inspectionTitle'), t('meta.inspectionDesc'), '/inspection', params.lang),
    alternates: hreflangAlternates('/inspection', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = createT(getDictionary(params.lang))
  const url = `${SITE.url}/${params.lang === 'en' ? '' : params.lang + '/'}inspection`
  const faq = [1, 2, 3, 4, 5, 6].map((i) => ({ q: t(`ins.q${i}`), a: t(`ins.a${i}`) }))
  const blocks = [
    serviceJsonLd({
      name: `${t('ins.title1')} ${t('ins.title2')}`,
      description: t('ins.sub'),
      url,
      serviceType: 'vehicle inspection',
    }),
    serviceJsonLd({
      name: t('vh.title'),
      description: t('vh.sub'),
      url,
      serviceType: 'vehicle history verification',
    }),
    faqJsonLd(faq),
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(graphJsonLd(blocks))} />
      <InspectionPage lang={params.lang} />
    </>
  )
}
