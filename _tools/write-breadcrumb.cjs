const fs = require('fs');
const path = require('path');
const content = `'use client'
import LLink from '../i18n/LLink'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export default function BreadcrumbNav({ items, homeLabel = 'Home' }: { items: BreadcrumbItem[]; homeLabel?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: 'https://www.cargration.com' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: 'https://www.cargration.com' + item.href } : {}),
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs flex-wrap">
        <LLink href="/" className="transition-colors hover:underline" style={{ color: 'var(--color-steel-400)' }}>
          {homeLabel}
        </LLink>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span style={{ color: 'var(--color-steel-400)' }}>{'/'}</span>
            {item.href ? (
              <LLink href={item.href} className="transition-colors hover:underline" style={{ color: 'var(--color-steel-400)' }}>
                {item.label}
              </LLink>
            ) : (
              <span style={{ color: 'var(--color-steel-200)' }}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
`;
fs.writeFileSync(path.join(__dirname, '..', 'src', 'components', 'BreadcrumbNav.tsx'), content);
console.log('BreadcrumbNav.tsx updated');
