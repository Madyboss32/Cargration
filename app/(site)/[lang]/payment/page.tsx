import type { Metadata } from 'next'
import PaymentPage from '@/src/views/PaymentPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.paymentTitle'),
    description: t('meta.paymentDesc'),
    openGraph: baseOpenGraph(t('meta.paymentTitle'), t('meta.paymentDesc'), '/payment', params.lang),
    alternates: hreflangAlternates('/payment', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <PaymentPage lang={params.lang} />
}
