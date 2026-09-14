'use client'
import Image from 'next/image'
import { useState } from 'react'
import LLink from '../i18n/LLink'
import { WHATSAPP_URL, SITE } from '../config/site'
import type { BlogPost } from '../types'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import { getPosts } from '../data/blog'

export default function BlogPostPage({ post, lang }: { post: BlogPost; lang: string }) {
  const t = createT(getDictionary(lang))
  const allPosts = getPosts(lang).filter((p) => p.id !== post.id).slice(0, 3)
  const bc: BreadcrumbItem[] = [{ label: t('footer.blogNews'), href: '/blog' }, { label: post.title }]
  const [copied, setCopied] = useState(false)
  const articleUrl = `${SITE.url}/blog-post/${post.slug}`

  const shareOn = (platform: string) => {
    const url = encodeURIComponent(articleUrl)
    const text = encodeURIComponent(post.title)
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    }
    if (urls[platform]) window.open(urls[platform], '_blank', 'noopener,noreferrer,width=600,height=500')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* noop */ }
  }
  return (
    <main>
      <section className="relative h-64 md:h-96 overflow-hidden">
        <Image src={post.img[0]} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-navy-950), transparent)' }} />
      </section>

      <article>
      <section className="py-12 md:py-16" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="flex items-center gap-3 mb-4 mt-3">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}>{post.cat}</span>
            <span className="text-sm" style={{ color: 'var(--color-ink-700)' }}>{post.date}</span>
            <span className="text-sm" style={{ color: 'var(--color-ink-700)' }}>{t('blg.by')} {post.author}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-ink-900)' }}>{post.title}</h1>

          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-8 pt-6 border-t flex flex-wrap items-center gap-3" style={{ borderColor: 'var(--color-paper-100)' }}>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-600)' }}>{t('blg.share')}</span>
            <div className="flex items-center gap-2">
              <button onClick={() => shareOn('twitter')} aria-label="Twitter" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-paper-100)]" style={{ color: 'var(--color-ink-700)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </button>
              <button onClick={() => shareOn('linkedin')} aria-label="LinkedIn" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-paper-100)]" style={{ color: 'var(--color-ink-700)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </button>
              <button onClick={() => shareOn('facebook')} aria-label="Facebook" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-paper-100)]" style={{ color: 'var(--color-ink-700)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </button>
              <button onClick={copyLink} aria-label={t('blg.copyLink')} className="h-9 px-3 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition-colors hover:bg-[var(--color-paper-100)]" style={{ color: copied ? 'var(--color-green-track)' : 'var(--color-ink-700)' }}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.632l-2.051.684a1 1 0 000 1.898l2.051.683a1 1 0 01.633.633l.684 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.632l2.051-.684a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" clipRule="evenodd" /></svg>
                {copied ? t('blg.linkCopied') : t('blg.copyLink')}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-paper-100)' }}>
            <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi, I read your article "${post.title}" and have a question.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-whatsapp)', color: '#fff' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 002.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {t('blg.chatWa')}
            </a>
            <LLink href="/inventory" className="px-5 py-2.5 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>{t('blg.quote')}</LLink>
            <LLink href="/blog" className="px-5 py-2.5 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>{t('blg.back')}</LLink>
          </div>
        </div>
      </section>
      </article>

      <section className="py-12 md:py-16" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/request-car', key: 'footer.requestCar' },
            ].map((l) => (
              <LLink key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-sm font-semibold no-underline transition-all border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-blue-600)' }}>
                {t(l.key)}
              </LLink>
            ))}
          </div>
          {allPosts.length > 0 && (
            <>
              <h2 className="font-display text-xl md:text-2xl font-bold mb-6" style={{ color: 'var(--color-ink-900)' }}>{t('blg.more')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {allPosts.map((bp) => (
                  <LLink key={bp.id} href={`/blog-post/${bp.slug}`} className="flex flex-col rounded-xl border bg-white overflow-hidden group transition-all hover:border-[var(--color-blue-500)] hover:shadow-sm" style={{ borderColor: 'var(--color-paper-100)' }}>
                    <Image src={bp.img[0]} alt={bp.title} width={400} height={200} sizes="(max-width: 640px) 100vw, 33vw" className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-blue-500)' }}>{bp.cat}</span>
                      <h3 className="font-display text-sm font-bold mt-1 group-hover:text-[var(--color-blue-600)] transition-colors" style={{ color: 'var(--color-ink-900)' }}>{bp.title}</h3>
                      <span className="text-[10px] mt-2 block" style={{ color: 'var(--color-ink-700)' }}>{bp.date}</span>
                    </div>
                  </LLink>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
