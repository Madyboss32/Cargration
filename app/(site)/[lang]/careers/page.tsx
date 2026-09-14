import type { Metadata } from 'next'
import CareersPage from '@/src/views/CareersPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.careersTitle'),
    description: t('meta.careersDesc'),
    openGraph: baseOpenGraph(t('meta.careersTitle'), t('meta.careersDesc'), '/careers', params.lang),
    alternates: hreflangAlternates('/careers', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <CareersPage lang={params.lang} />
}
