import type { Metadata } from 'next'
import TestimonialsPage from '@/src/views/TestimonialsPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.testimonialsTitle'),
    description: t('meta.testimonialsDesc'),
    openGraph: baseOpenGraph(t('meta.testimonialsTitle'), t('meta.testimonialsDesc'), '/testimonials', params.lang),
    alternates: hreflangAlternates('/testimonials', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <TestimonialsPage lang={params.lang} />
}
