import type { Metadata } from 'next'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import InventoryList from '@/src/views/InventoryList'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.usedTitle'),
    description: t('meta.usedDesc'),
    openGraph: baseOpenGraph(t('meta.usedTitle'), t('meta.usedDesc'), '/used-cars', params.lang),
    alternates: hreflangAlternates('/used-cars', params.lang),
  }
}

export default function Page({ params, searchParams }: { params: { lang: string }; searchParams: Record<string, string | string[] | undefined> }) {
  return (
    <InventoryList
      lang={params.lang}
      searchParams={searchParams}
      config={{
        base: '/used-cars',
        eyebrowKey: 'listing.usedEyebrow',
        titleKey: 'listing.usedTitle',
        subKey: 'listing.usedSub',
        eyebrow: 'Used Vehicles',
        title: 'Used Cars',
        sub: 'Pre-owned vehicles with verified mileage and condition reports.',
        preset: { cond: 'used' },
      }}
    />
  )
}
