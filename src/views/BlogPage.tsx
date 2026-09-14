import Image from 'next/image'
import LLink from '../i18n/LLink'
import { getPosts } from '../data/blog'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

export default function BlogPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const posts = getPosts(lang)
  const bc: BreadcrumbItem[] = [{ label: t('footer.blogNews') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('blg.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-paper-50)' }}>{t('blg.title')}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <LLink
                key={post.id}
                href={`/blog-post/${post.slug}`}
                className="flex flex-col rounded-2xl border bg-white shadow-sm overflow-hidden group"
                style={{ borderColor: 'var(--color-paper-100)' }}
              >
                <article>
                <div className="relative overflow-hidden">
                  <Image
                    src={post.img[0]}
                    alt={post.title}
                    width={600}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}>
                    {post.cat}
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <h2 className="font-display text-base font-bold leading-snug" style={{ color: 'var(--color-ink-900)' }}>{post.title}</h2>
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--color-ink-700)' }}>{post.excerpt}</p>
                  <div className="mt-auto pt-3 flex items-center justify-between text-xs" style={{ color: 'var(--color-ink-700)' }}>
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                  <span className="text-sm font-semibold mt-1" style={{ color: 'var(--color-blue-500)' }}>{t('blg.read')}</span>
                </div>
                </article>
              </LLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
