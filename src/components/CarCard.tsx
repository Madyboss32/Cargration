'use client'
import Image from 'next/image'
import type { CatalogItem } from '../types'
import { whatsappWithMessage } from '../config/site'
import SaveButton from './SaveButton'
import LLink from '../i18n/LLink'
import { useI18n } from '../i18n/I18nProvider'
import { colorLabel } from '../i18n/values'
import { track } from '../lib/track'
import { imgError } from '../lib/imgFallback'

const badgeKeys: Record<string, string> = {
  suv: 'type.suv', sedan: 'type.sedan', ev: 'type.ev', fuel: 'type.fuel',
  mpv: 'type.mpv', pickup: 'type.pickup', van: 'type.van', truck: 'type.truck', hatchback: 'type.hatchback',
}

const FUEL_BADGE = new Set(['Electric', 'Hybrid', 'Plug-in Hybrid', 'REEV'])

function slugify(s: string): string {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function carHref(car: CatalogItem): string {
  return `/car-detail/${slugify(car.brand)}-${slugify(car.name)}-${slugify(car.trim || 'base')}-${car.year || '0'}-${slugify(car.id || '')}`
}

interface CarCardProps {
  car: CatalogItem
  index?: number
  compact?: boolean
  headingLevel?: 'h2' | 'h3'
}

export default function CarCard({ car, index = 0, compact = false, headingLevel = 'h3' }: CarCardProps) {
  const { t } = useI18n()
  const badge = badgeKeys[car.type] ? t(badgeKeys[car.type]) : car.type
  const href = carHref(car)
  const item = {
    item_id: car.id,
    item_name: `${car.name} ${car.trim}`.trim(),
    item_brand: car.brand,
    item_category: car.type,
    price: car.price,
  }
  const Heading = headingLevel === 'h2' ? 'h2' : 'h3'

  return (
    <article className={`card card-hover group flex flex-col h-full ${compact ? 'overflow-hidden' : ''}`}>
      <LLink href={href} prefetch={false} className="relative block overflow-hidden" aria-label={`${car.name} ${car.trim}`}>
        <div className={`relative w-full overflow-hidden bg-[var(--color-paper-100)] ${compact ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
          <Image
            src={car.img[0]}
            alt={`${car.brand} ${car.name} — ${colorLabel(t, car.colorName) || car.type}`}
            width={1000}
            height={750}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            onError={imgError}
          />
        </div>
        <span className={`badge badge-navy ${compact ? 'top-1.5 left-1.5 text-[9px] px-1.5 py-[2px]' : 'top-2.5 left-2.5'}`}>{badge}</span>
        <div className={`absolute ${compact ? 'top-1.5 right-1.5' : 'top-2.5 right-2.5'} flex flex-col items-end gap-1.5`}>
          {car.fuel && FUEL_BADGE.has(car.fuel) && (
            <span className={`badge badge-green shadow-sm ${compact ? 'text-[9px] px-1.5 py-[2px]' : ''}`}>{car.fuel === 'Electric' ? t('type.ev') : car.fuel}</span>
          )}
          {!compact && (car.units ?? 1) > 1 && (
            <span className="badge badge-blue">{car.units} {t('common.units')}</span>
          )}
        </div>
        <div className={`absolute ${compact ? 'bottom-1.5 right-1.5' : 'bottom-2.5 right-2.5'}`}>
          <SaveButton car={car} />
        </div>
      </LLink>

      <div className={`flex flex-col gap-1 flex-1 ${compact ? 'p-3' : 'p-4'}`}>
        <p className={`font-display font-bold leading-none text-[var(--color-navy-950)] ${compact ? 'text-base' : 'text-lg'}`}>
          ${car.price.toLocaleString()}
          <span className="ml-1 align-middle font-body text-[10px] font-medium uppercase tracking-wider text-[var(--color-ink-700)]">FOB</span>
        </p>

        <Heading className={`font-display font-bold leading-snug line-clamp-1 ${compact ? 'text-xs mt-1' : 'text-sm mt-1.5'}`}>
          <LLink
            href={href}
            prefetch={false}
            className="transition-colors hover:text-[var(--color-blue-600)]"
            onClick={() => track('select_item', { items: [item] })}
          >
            {car.name}
          </LLink>
        </Heading>
        {!compact && <p className="text-xs text-[var(--color-ink-700)] line-clamp-1">{car.trim}</p>}

        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-1 mb-2">
            {car.specs.slice(0, compact ? 2 : 3).map((s: string, i: number) => (
              <span
                key={i}
                className={`max-w-full truncate rounded-md border border-[var(--color-paper-100)] bg-[var(--color-paper-50)] font-medium text-[var(--color-ink-700)] ${compact ? 'px-1 py-[1px] text-[9px]' : 'px-1.5 py-0.5 text-[10px]'}`}
              >
                {s}
              </span>
            ))}
          </div>
          {compact ? (
            <a
              href={whatsappWithMessage(`Hi, I'm interested in the ${car.name} ${car.trim} — FOB $${car.price.toLocaleString()}`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('generate_lead', { method: 'whatsapp', items: [item] })}
              className="btn btn-whatsapp btn-sm !min-h-0 w-full text-[11px] py-1.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="ml-1">{t('common.inquire')}</span>
            </a>
          ) : (
            <>
              <div className="flex gap-2">
                <LLink href={href} prefetch={false} className="btn btn-dark btn-sm flex-1">
                  {t('common.details')}
                </LLink>
                <a
                  href={whatsappWithMessage(`Hi, I'm interested in the ${car.name} ${car.trim} — FOB $${car.price.toLocaleString()}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('generate_lead', { method: 'whatsapp', items: [item] })}
                  className="btn btn-whatsapp btn-sm !min-h-0 px-3"
                  aria-label={`${t('common.inquire')} — ${car.name}`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
