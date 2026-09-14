import type { Metadata } from 'next'
import AboutPage from '@/src/views/AboutPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.aboutTitle'),
    description: t('meta.aboutDesc'),
    openGraph: baseOpenGraph(t('meta.aboutTitle'), t('meta.aboutDesc'), '/about', params.lang),
    alternates: hreflangAlternates('/about', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <AboutPage lang={params.lang} />
}
