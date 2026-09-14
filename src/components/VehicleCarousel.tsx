'use client'
import { useState, useCallback } from 'react'
import type { CatalogItem } from '../types'
import CarCard from './CarCard'
import { useI18n } from '../i18n/I18nProvider'

interface VehicleCarouselProps {
  title: string
  vehicles: CatalogItem[]
  count: number
}

const ITEMS_PER_PAGE = 4

export default function VehicleCarousel({ title, vehicles, count }: VehicleCarouselProps) {
  const [page, setPage] = useState(0)
  const totalPages = Math.max(1, Math.ceil((vehicles.length || count) / ITEMS_PER_PAGE))
  const { t } = useI18n()

  const prev = useCallback(() => setPage((p) => Math.max(0, p - 1)), [])
  const next = useCallback(() => setPage((p) => Math.min(totalPages - 1, p + 1)), [totalPages])

  const start = page * ITEMS_PER_PAGE
  const visible = vehicles.slice(start, start + ITEMS_PER_PAGE)

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4 px-4 lg:px-8">
        <div>
          <h2 className="font-display text-xl md:text-2xl font-bold">{title}</h2>
          {count != null && (
            <p className="text-xs text-[var(--color-ink-700)] mt-0.5">{count} {t('common.vehicles')}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--color-ink-700)]">
            {page + 1} / {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={page === 0}
              className="w-8 h-8 rounded-full border border-[var(--color-paper-100)] bg-white flex items-center justify-center hover:bg-[var(--color-paper-50)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={t('common.prev')}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={page >= totalPages - 1}
              className="w-8 h-8 rounded-full border border-[var(--color-paper-100)] bg-white flex items-center justify-center hover:bg-[var(--color-paper-50)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={t('common.next')}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 overflow-hidden">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 transition-transform duration-300 ease-in-out"
        >
          {visible.map((car: CatalogItem, i: number) => {
            const idx = vehicles.indexOf(car)
            return <CarCard key={idx} car={car} index={idx} />
          })}
        </div>
      </div>
    </section>
  )
}
