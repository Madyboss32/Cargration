import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '../types'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog-post/${post.slug}`}
      className="flex flex-col rounded-2xl border border-[var(--color-paper-100)] bg-white shadow-sm overflow-hidden snap-start min-w-[300px] max-w-[360px] flex-shrink-0 group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={post.img[0]}
          alt={post.title}
          width={400}
          height={200}
          sizes="(max-width: 640px) 100vw, 360px"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-blue-100)] text-[var(--color-blue-600)]">
          {post.cat}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-5 flex-1">
        <h3 className="font-display text-base font-bold leading-snug line-clamp-2">{post.title}</h3>
        <p className="text-sm text-[var(--color-ink-700)] line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-[var(--color-ink-700)]">
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
      </div>
    </Link>
  )
}
