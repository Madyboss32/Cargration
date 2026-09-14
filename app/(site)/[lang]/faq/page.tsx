import type { Metadata } from 'next'
import FAQPage from '@/src/views/FAQPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.faqTitle'),
    description: t('meta.faqDesc'),
    openGraph: baseOpenGraph(t('meta.faqTitle'), t('meta.faqDesc'), '/faq', params.lang),
    alternates: hreflangAlternates('/faq', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <FAQPage lang={params.lang} />
}
