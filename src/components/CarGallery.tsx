'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { imgError } from '../lib/imgFallback'

interface CarGalleryProps {
  images: string[]
  alt: string
}

export default function CarGallery({ images, alt }: CarGalleryProps) {
  const { t } = useI18n()
  const pics = images.length ? images : ['']
  const [active, setActive] = useState(0)
  const idx = Math.min(active, pics.length - 1)

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative rounded-2xl overflow-hidden border bg-white group"
        style={{ borderColor: 'var(--color-paper-100)' }}
      >
        <div className="aspect-[4/3] w-full flex items-center justify-center" style={{ background: 'var(--color-paper-100)' }}>
          {pics[idx] && (
            <Image
              src={pics[idx]}
              alt={`${alt} — photo ${idx + 1}`}
              width={1024}
              height={768}
              sizes="(max-width: 768px) 100vw, 75vw"
              className="w-full h-full object-cover"
              onError={imgError}
            />
          )}
        </div>
        {pics.length > 1 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold font-mono" style={{ background: 'rgba(10,49,97,.82)', color: '#fff' }}>
            {idx + 1} / {pics.length}
          </div>
        )}
        {pics.length > 1 && (
          <>
            <button
              onClick={() => setActive((i) => (i - 1 + pics.length) % pics.length)}
              aria-label={t('common.prev')}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(255,255,255,.92)', color: 'var(--color-navy-950)' }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
            </button>
            <button
              onClick={() => setActive((i) => (i + 1) % pics.length)}
              aria-label={t('common.next')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(255,255,255,.92)', color: 'var(--color-navy-950)' }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
            </button>
          </>
        )}
      </div>

      {pics.length > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {pics.slice(0, 12).map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={t('gallery.viewPhoto', { n: i + 1 })}
              className={`rounded-lg overflow-hidden border-2 aspect-[4/3] transition-all ${i === idx ? 'ring-2' : 'opacity-70 hover:opacity-100'}`}
              style={{
                borderColor: i === idx ? 'var(--color-blue-500)' : 'transparent',
                background: 'var(--color-paper-100)',
                ...(i === idx ? {} : {}),
              }}
            >
              <Image src={src} alt={`${alt} — ${t('gallery.viewPhoto', { n: i + 1 })}`} width={200} height={150} sizes="100px" className="w-full h-full object-cover" onError={imgError} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
