import type { Metadata } from 'next'
import BlogPage from '@/src/views/BlogPage'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  return {
    title: t('meta.blogTitle'),
    description: t('meta.blogDesc'),
    openGraph: baseOpenGraph(t('meta.blogTitle'), t('meta.blogDesc'), '/blog', params.lang),
    alternates: hreflangAlternates('/blog', params.lang),
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  return <BlogPage lang={params.lang} />
}
