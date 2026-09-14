'use client'
import LLink from '../i18n/LLink'
import { SITE } from '../config/site'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export default function BreadcrumbNav({ items, homeLabel = 'Home' }: { items: BreadcrumbItem[]; homeLabel?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: SITE.url },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${SITE.url}${item.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs flex-wrap">
        <LLink href="/" className="transition-colors hover:underline" style={{ color: 'var(--color-steel-400)' }}>
          {homeLabel}
        </LLink>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <span key={i} className="flex items-center gap-1.5">
              <span style={{ color: 'var(--color-steel-400)' }}>{'/'}</span>
              {item.href ? (
                <LLink href={item.href} aria-current={isLast ? 'page' : undefined} className="transition-colors hover:underline" style={{ color: 'var(--color-steel-400)' }}>
                  {item.label}
                </LLink>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} style={{ color: 'var(--color-steel-200)' }}>{item.label}</span>
              )}
            </span>
          )
        })}
      </nav>
    </>
  )
}
