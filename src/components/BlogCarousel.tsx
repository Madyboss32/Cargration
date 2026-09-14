'use client'
import { useState, useEffect, useRef } from 'react'
import type { BlogPost } from '../types'
import BlogCard from './BlogCard'
import { useI18n } from '../i18n/I18nProvider'

interface BlogCarouselProps {
  posts: BlogPost[]
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const { t } = useI18n()
  const [current, setCurrent] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const total: number = posts.length

  useEffect(() => {
    if (paused || total <= 1) { clearInterval(timerRef.current as ReturnType<typeof setInterval>); return }
    timerRef.current = setInterval(() => {
      setCurrent((c: number) => (c + 1) % total)
    }, 5000)
    return () => clearInterval(timerRef.current as ReturnType<typeof setInterval>)
  }, [paused, total])

  const prev = (): void => setCurrent((c: number) => (c - 1 + total) % total)
  const next = (): void => setCurrent((c: number) => (c + 1) % total)

  const visible = (offset: number): BlogPost => posts[(current + offset) % total]

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hidden md:flex gap-5 overflow-hidden">
        {[0, 1, 2].map((i: number) => (
          <div key={i} className="flex-1 min-w-0">
            <BlogCard post={visible(i)} />
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <BlogCard post={visible(0)} />
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-[var(--color-paper-100)] bg-white flex items-center justify-center hover:bg-[var(--color-paper-50)] transition-colors"
          aria-label={t('blog.prevPost')}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex gap-2">
          {posts.map((_: BlogPost, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-[var(--color-blue-500)]' : 'bg-[var(--color-paper-100)]'}`}
              aria-label={t('blog.goToPost', { n: i + 1 })}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-[var(--color-paper-100)] bg-white flex items-center justify-center hover:bg-[var(--color-paper-50)] transition-colors"
          aria-label={t('blog.nextPost')}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  )
}
