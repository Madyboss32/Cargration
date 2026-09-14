import type { Metadata } from 'next'
import B2CCarExportPage from '@/src/views/B2CCarExportPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { SITE } from '@/src/config/site'
import { serviceJsonLd, howToJsonLd, faqJsonLd, graphJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.b2cTitle'),
    description: t('meta.b2cDesc'),
    openGraph: baseOpenGraph(t('meta.b2cTitle'), t('meta.b2cDesc'), '/b2c-car-export', params.lang),
    alternates: hreflangAlternates('/b2c-car-export', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = createT(getDictionary(params.lang))
  const url = `${SITE.url}/${params.lang === 'en' ? '' : params.lang + '/'}b2c-car-export`
  const steps = [1, 2, 3, 4, 5].map((n) => ({
    name: t(`b2c.s${n}t`),
    text: t(`b2c.s${n}d`),
  }))
  const faq = [1, 2, 3, 4, 5].map((n) => ({ q: t(`b2c.q${n}`), a: t(`b2c.a${n}`) }))
  const blocks = [
    serviceJsonLd({
      name: t('b2c.title'),
      description: t('b2c.sub'),
      url,
      image: `${SITE.url}/assets/img/cargration-logo.webp`,
      serviceType: 'single-vehicle export',
      areaServed: ['Global'],
    }),
    howToJsonLd(steps),
    faqJsonLd(faq),
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(graphJsonLd(blocks))} />
      <B2CCarExportPage lang={params.lang} />
    </>
  )
}