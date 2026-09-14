import type { Metadata } from 'next'
import ContactPage from '@/src/views/ContactPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.contactTitle'),
    description: t('meta.contactDesc'),
    openGraph: baseOpenGraph(t('meta.contactTitle'), t('meta.contactDesc'), '/contact', params.lang),
    alternates: hreflangAlternates('/contact', params.lang),
  }
}

export default function Page() { return <ContactPage /> }
