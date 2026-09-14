import type { Metadata } from 'next'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import InventoryList from '@/src/views/InventoryList'
import { getDictionary, createT } from '@/src/i18n'

export const runtime = 'edge'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.evsTitle'),
    description: t('meta.evsDesc'),
    openGraph: baseOpenGraph(t('meta.evsTitle'), t('meta.evsDesc'), '/evs', params.lang),
    alternates: hreflangAlternates('/evs', params.lang),
  }
}

export default function Page({ params, searchParams }: { params: { lang: string }; searchParams: Record<string, string | string[] | undefined> }) {
  return (
    <InventoryList
      lang={params.lang}
      searchParams={searchParams}
      config={{
        base: '/evs',
        eyebrowKey: 'listing.evsEyebrow',
        titleKey: 'listing.evsTitle',
        subKey: 'listing.evsSub',
        eyebrow: 'New Energy',
        title: 'Electric & Hybrid Vehicles',
        sub: 'Export-ready EVs, hybrids and REEVs from China.',
        preset: { fuel: 'Electric' },
      }}
    />
  )
}
