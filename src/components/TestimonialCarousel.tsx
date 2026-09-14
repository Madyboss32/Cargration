'use client'
import { useState, useEffect, useRef } from 'react'
import type { Testimonial } from '../types'
import { testimonials as defaultTestimonials } from '../data/testimonials'

interface TestimonialCarouselProps {
  testimonials?: Testimonial[]
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" className="w-4 h-4 text-yellow-400">
      <path strokeWidth="1" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function TestimonialCarousel({ testimonials = defaultTestimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total: number = testimonials.length

  useEffect(() => {
    if (paused) { clearInterval(timerRef.current as ReturnType<typeof setInterval>); return }
    timerRef.current = setInterval(() => {
      setCurrent((c: number) => (c + 1) % total)
    }, 5000)
    return () => clearInterval(timerRef.current as ReturnType<typeof setInterval>)
  }, [paused, total])

  const prev = (): void => setCurrent((c: number) => (c - 1 + total) % total)
  const next = (): void => setCurrent((c: number) => (c + 1) % total)

  const visible = (offset: number): Testimonial => testimonials[(current + offset) % total]

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex gap-4 overflow-hidden">
        <div className="hidden md:flex gap-4 w-full">
          {[0, 1, 2].map((i: number) => {
            const t: Testimonial = visible(i)
            return (
              <div key={i} className="flex-1 bg-white border border-[var(--color-paper-100)] rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_: unknown, j: number) => (
                    <StarIcon key={j} filled={j < t.stars} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <p className="text-xs font-semibold text-[var(--color-ink-700)]">{t.author}</p>
              </div>
            )
          })}
        </div>
        <div className="md:hidden w-full">
          {(() => {
            const t: Testimonial = visible(0)
            return (
              <div className="bg-white border border-[var(--color-paper-100)] rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_: unknown, j: number) => (
                    <StarIcon key={j} filled={j < t.stars} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <p className="text-xs font-semibold text-[var(--color-ink-700)]">{t.author}</p>
              </div>
            )
          })()}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-[var(--color-paper-100)] bg-white flex items-center justify-center hover:bg-[var(--color-paper-50)] transition-colors" aria-label="Previous testimonial">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_: Testimonial, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-[var(--color-blue-500)]' : 'bg-[var(--color-paper-100)]'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full border border-[var(--color-paper-100)] bg-white flex items-center justify-center hover:bg-[var(--color-paper-50)] transition-colors" aria-label="Next testimonial">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </section>
  )
}
