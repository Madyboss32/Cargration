import type { Metadata } from 'next'
import HowItWorksPage from '@/src/views/HowItWorksPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { howToJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.howTitle'),
    description: t('meta.howDesc'),
    openGraph: baseOpenGraph(t('meta.howTitle'), t('meta.howDesc'), '/how-it-works', params.lang),
    alternates: hreflangAlternates('/how-it-works', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = createT(getDictionary(params.lang))
  const howToSteps = [1, 2, 3, 4, 5].map((n) => ({
    name: t(`how.s${n}t`),
    text: t(`how.s${n}d`),
  }))
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(howToJsonLd(howToSteps))}
      />
      <HowItWorksPage lang={params.lang} />
    </>
  )
}
