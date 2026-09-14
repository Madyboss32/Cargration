import type { Metadata } from 'next'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import InventoryList from '@/src/views/InventoryList'
import { getDictionary, createT } from '@/src/i18n'

export const runtime = 'edge'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.newTitle'),
    description: t('meta.newDesc'),
    openGraph: baseOpenGraph(t('meta.newTitle'), t('meta.newDesc'), '/new-cars', params.lang),
    alternates: hreflangAlternates('/new-cars', params.lang),
  }
}

export default function Page({ params, searchParams }: { params: { lang: string }; searchParams: Record<string, string | string[] | undefined> }) {
  return (
    <InventoryList
      lang={params.lang}
      searchParams={searchParams}
      config={{
        base: '/new-cars',
        eyebrowKey: 'listing.newEyebrow',
        titleKey: 'listing.newTitle',
        subKey: 'listing.newSub',
        eyebrow: 'New Vehicles',
        title: 'New Cars',
        sub: 'Brand-new Chinese cars with minimal mileage, sourced directly from dealers.',
        preset: { cond: 'new' },
      }}
    />
  )
}