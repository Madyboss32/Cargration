import type { Metadata } from 'next'
import { hreflangAlternates, ogImageFallback } from '@/src/lib/seo'
import { notFound } from 'next/navigation'
import BlogPostPage from '@/src/views/BlogPostPage'
import { getPosts, getPostBySlug } from '@/src/data/blog'
import { articleJsonLd, jsonLdScript } from '@/src/lib/jsonld'

interface Props {
  params?: { slug?: string; lang?: string }
}

export function generateStaticParams() {
  return getPosts('en').map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params?.lang || 'en'
  const post = getPostBySlug(lang, params?.slug ?? '')
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.img[0] ? [{ url: post.img[0], width: 800, height: 400 }] : [ogImageFallback()],
    },
    alternates: hreflangAlternates(`/blog-post/${post.slug}`, lang),
  }
}

export default async function Page({ params }: Props) {
  const lang = params?.lang || 'en'
  const post = getPostBySlug(lang, params?.slug ?? '')
  if (!post) notFound()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleJsonLd(post))}
      />
      <BlogPostPage post={post} lang={lang} />
    </>
  )
}
