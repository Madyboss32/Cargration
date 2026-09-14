import type { CatalogItem, BlogPost } from '../types'
import { SITE } from '../config/site'
import { carDisplayName, carMetaDescription } from './carSeo'

export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/img/cargration-logo.webp`,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    description:
      'Beijing & Guizhou-based vehicle export company specializing in sourcing, inspecting, documenting, and shipping Chinese vehicles to buyers in 42+ countries.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phoneDisplay,
      contactType: 'customer service',
      availableLanguage: ['English', 'Russian', 'French', 'Arabic', 'Portuguese', 'Spanish'],
    },
    sameAs: [
      SITE.telegram,
      'https://www.facebook.com/cargration',
      'https://www.linkedin.com/company/cargration',
      'https://www.instagram.com/cargration',
      'https://x.com/cargration',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Beijing',
        addressRegion: 'Beijing',
        addressCountry: 'CN',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Guizhou',
        addressRegion: 'Guizhou',
        addressCountry: 'CN',
      },
    ],
    geo: [
      {
        '@type': 'GeoCoordinates',
        latitude: 39.9042,
        longitude: 116.4074,
        name: 'Beijing Office',
      },
      {
        '@type': 'GeoCoordinates',
        latitude: 26.647,
        longitude: 106.630,
        name: 'Guizhou Office',
      },
    ],
    areaServed: {
      '@type': 'ItemList',
      name: '42+ countries',
      itemListElement: [
        'Nigeria', 'Ghana', 'Kenya', 'Tanzania', 'South Africa',
        'Egypt', 'Morocco', 'UAE', 'Saudi Arabia', 'Qatar',
        'Oman', 'Bahrain', 'Kuwait', 'Jordan', 'Iraq',
        'Russia', 'Kazakhstan', 'Uzbekistan', 'Georgia', 'Armenia',
        'Chile', 'Peru', 'Colombia', 'Dominican Republic', 'Honduras',
        'Mexico', 'Philippines', 'Thailand', 'Myanmar', 'Vietnam',
        'Indonesia', 'Malaysia', 'Cambodia', 'Mongolia', 'Pakistan',
        'Bangladesh', 'Sri Lanka', 'Fiji', 'Australia', 'New Zealand',
        'UK', 'Ireland',
      ],
    },
  }
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/inventory?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

function slugify(s: string): string {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function vehicleJsonLd(car: CatalogItem): Record<string, unknown> {
  const condition =
    car.condition === 'new' ? 'https://schema.org/NewCondition' : 'https://schema.org/UsedCondition'
  const availability =
    car.units === 0
      ? 'https://schema.org/OutOfStock'
      : car.units && car.units > 1
        ? 'https://schema.org/InStock'
        : 'https://schema.org/LimitedAvailability'
  const displayName = carDisplayName(car)
  const modelName = displayName.startsWith(car.brand + ' ')
    ? displayName.slice(car.brand.length + 1)
    : car.name
  return {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: displayName,
    brand: { '@type': 'Brand', name: car.brand },
    model: modelName,
    ...(car.trim ? { vehicleConfiguration: car.trim } : {}),
    ...(car.year ? { vehicleModelDate: car.year } : {}),
    ...(car.img[0] ? { image: car.img[0] } : {}),
    description: carMetaDescription(car),
    bodyType: car.type,
    ...(car.fuel ? { fuelType: car.fuel } : {}),
    ...(car.transmission ? { vehicleTransmission: car.transmission } : {}),
    ...(car.colorName ? { color: car.colorName } : {}),
    ...(car.km ? { mileageFromOdometer: { '@type': 'QuantitativeValue', value: car.km, unitCode: 'KMT' } } : {}),
    itemCondition: condition,
    offers: {
      '@type': 'Offer',
      price: car.price,
      priceCurrency: 'USD',
      availability,
      itemCondition: condition,
      url: `${SITE.url}/car-detail/${slugify(car.brand)}-${slugify(car.name)}-${slugify(car.trim || 'base')}-${car.year || '0'}-${slugify(car.id || '')}`,
    },
  }
}

export function articleJsonLd(post: BlogPost): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/assets/img/cargration-logo.webp` },
    },
    mainEntityOfPage: `${SITE.url}/blog-post/${post.slug}`,
    ...(post.img?.[0] ? { image: post.img[0] } : {}),
  }
}

export function faqJsonLd(entries: Array<{ q: string; a: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.q,
      acceptedAnswer: { '@type': 'Answer', text: e.a },
    })),
  }
}

export function itemListJsonLd(items: Array<{ name: string; url: string; image?: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.image ? { image: item.image } : {}),
    })),
  }
}

export function howToJsonLd(steps: Array<{ name: string; text: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy and Export a Chinese Vehicle',
    description: 'Step-by-step guide to sourcing, inspecting, paying for, and shipping a Chinese vehicle to your country through Cargration.',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

export interface ServiceJsonLdOptions {
  name: string
  description: string
  url: string
  image?: string
  providerName?: string
  areaServed?: string[]
  serviceType?: string
}

export function serviceJsonLd(opts: ServiceJsonLdOptions): Record<string, unknown> {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    url: opts.url,
    ...(opts.image ? { image: opts.image } : {}),
    provider: { '@type': 'Organization', name: opts.providerName || SITE.name, url: SITE.url },
    ...(opts.areaServed && opts.areaServed.length
      ? {
          areaServed: {
            '@type': 'ItemList',
            name: opts.areaServed.join(', '),
            itemListElement: opts.areaServed,
          },
        }
      : {}),
  }
}

/** Wraps multiple schema blocks under a single @context/@graph for one `<script type="application/ld+json">`. */
export function graphJsonLd(blocks: Record<string, unknown>[]): Record<string, unknown> {
  return { '@context': 'https://schema.org', '@graph': blocks }
}

export function jsonLdScript(data: Record<string, unknown>): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}
