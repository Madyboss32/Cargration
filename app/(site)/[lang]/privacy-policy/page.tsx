import type { Metadata } from 'next'
import PrivacyPolicyPage from '@/src/views/PrivacyPolicyPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.privacyTitle'),
    description: t('meta.privacyDesc'),
    openGraph: baseOpenGraph(t('meta.privacyTitle'), t('meta.privacyDesc'), '/privacy-policy', params.lang),
    alternates: hreflangAlternates('/privacy-policy', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) { return <PrivacyPolicyPage lang={params.lang} /> }
