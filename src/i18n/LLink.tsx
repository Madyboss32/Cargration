'use client'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { defaultLocale } from './config'
import { useI18n } from './I18nProvider'

interface LLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: ReactNode
  prefetch?: boolean
}

export function localeHref(href: string, lang?: string): string {
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href
  const clean = href === '' ? '/' : href
  const l = lang || defaultLocale
  if (l === defaultLocale) return clean
  if (clean.startsWith('/')) {
    return `/${l}${clean === '/' ? '' : clean}`
  }
  return clean
}

export default function LLink({ href, children, ...rest }: LLinkProps) {
  const { lang } = useI18n()
  return (
    <Link href={localeHref(href, lang)} {...rest}>
      {children}
    </Link>
  )
}
