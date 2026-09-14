'use client'
import { useState, useEffect } from 'react'
import { toggleSaved, isSaved, subscribe, type SavedVehicle } from '../lib/saved'
import { useI18n } from '../i18n/I18nProvider'

interface SaveButtonProps {
  car: {
    id?: string
    name: string
    brand: string
    trim: string
    price: number
    img: string | string[]
    type: string
    fuel?: string
    year?: string
    km?: number
    transmission?: string
    drive?: string
    condition: string
  }
  className?: string
}

export default function SaveButton({ car, className = '' }: SaveButtonProps) {
  const [saved, setSaved] = useState<boolean>(false)
  const { t } = useI18n()

  useEffect(() => {
    const id = car.id || ''
    if (!id) return
    const sync = (): void => setSaved(isSaved(id))
    sync()
    return subscribe(sync)
  }, [car.id])

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    const vehicle: SavedVehicle = {
      ...car,
      id: car.id || '',
      name: car.name || `${car.brand} ${car.trim}`,
      trim: car.trim || '',
      price: Number(car.price) || 0,
      img: Array.isArray(car.img) ? car.img[0] || '' : car.img,
      type: car.type || '',
      fuel: car.fuel || '',
      year: car.year || '',
      km: Number(car.km) || 0,
      transmission: car.transmission || '',
      drive: car.drive || '',
      condition: car.condition || '',
    }
    setSaved(toggleSaved(vehicle))
  }

  if (!car.id) return null

  return (
    <button
      onClick={handleToggle}
      aria-label={saved ? t('common.saved') : t('common.save')}
      title={saved ? t('common.saved') : t('common.save')}
      className={`w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-colors ${className}`}
      style={{
        background: saved ? 'var(--color-blue-500)' : 'rgba(255,255,255,.92)',
        color: saved ? '#fff' : 'var(--color-ink-700)',
        border: '1px solid var(--color-paper-100)',
        cursor: 'pointer',
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <path d="M12 21C7 16.5 3 13.3 3 9.1 3 6.3 5.2 4 8 4c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2 2.8 0 5 2.3 5 5.1 0 4.2-4 7.4-9 11.9z" />
      </svg>
    </button>
  )
}
