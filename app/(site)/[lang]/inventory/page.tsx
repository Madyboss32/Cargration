import type { Metadata } from 'next'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import InventoryList from '@/src/views/InventoryList'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.invTitle'),
    description: t('meta.invDesc'),
    openGraph: baseOpenGraph(t('meta.invTitle'), t('meta.invDesc'), '/inventory', params.lang),
    alternates: hreflangAlternates('/inventory', params.lang),
  }
}

export default function Page({ params, searchParams }: { params: { lang: string }; searchParams: Record<string, string | string[] | undefined> }) {
  return (
    <InventoryList
      lang={params.lang}
      searchParams={searchParams}
      config={{
        base: '/inventory',
        eyebrowKey: 'listing.inventoryEyebrow',
        titleKey: 'listing.inventoryTitle',
        subKey: 'listing.inventorySub',
        eyebrow: 'Inventory',
        title: 'Our Inventory',
        sub: 'Live export stock from China — filter by brand, body type, fuel, or price.',
      }}
    />
  )
}
