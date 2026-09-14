import type { Metadata } from 'next'
import WarrantyPage from '@/src/views/WarrantyPage'
import { getDictionary, createT } from '@/src/i18n'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.warrantyTitle'),
    description: t('meta.warrantyDesc'),
    openGraph: baseOpenGraph(t('meta.warrantyTitle'), t('meta.warrantyDesc'), '/warranty', params.lang),
    alternates: hreflangAlternates('/warranty', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <WarrantyPage lang={params.lang} />
}
