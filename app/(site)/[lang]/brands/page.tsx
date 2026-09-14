import type { Metadata } from 'next'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'
import BrandsPage from '@/src/views/BrandsPage'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.brandsTitle'),
    description: t('meta.brandsDesc'),
    openGraph: baseOpenGraph(t('meta.brandsTitle'), t('meta.brandsDesc'), '/brands', params.lang),
    alternates: hreflangAlternates('/brands', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  const t = createT(getDictionary(params.lang))
  return <BrandsPage t={t} lang={params.lang} />
}