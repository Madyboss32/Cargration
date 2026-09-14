'use client'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { WHATSAPP_URL, SITE } from '../config/site'
import { useI18n } from '../i18n/I18nProvider'

interface FloatingButton {
  key: string
  href: string
  bg: string
  icon: ReactNode
}

const BUTTONS: FloatingButton[] = [
  {
    key: 'floating.whatsapp',
    href: WHATSAPP_URL,
    bg: 'var(--color-whatsapp)',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.7 14.2c-.2.6-1.4 1.2-2 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.9.1.1.1.3 0 .5-.5.9-1 .9-.7 1.4.9 1.7 1.9 2.3 3.4 3.1.3.1.4.1.6-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.2.1 1.5.7 1.8.9.3.1.5.2.5.4.1.2.1.7-.1 1.3Z" /></svg>
    ),
  },
  {
    key: 'floating.telegram',
    href: SITE.telegram,
    bg: 'var(--color-telegram)',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M21.9 4.2 2.7 11.6c-1.2.5-1.2 1.2-.2 1.5l4.9 1.5 1.9 5.9c.2.7.4.9.9.9s.7-.2 1-.5l2.4-2.3 4.8 3.6c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.4-1.7-1.3-1.3z" /></svg>
    ),
  },
]

export default function FloatingContact() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { t } = useI18n()

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 50, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {BUTTONS.map((btn: FloatingButton, i: number) => {
        const label = t(btn.key)
        return (
        <a
          key={btn.key}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: 52, height: 52, borderRadius: '50%',
            background: btn.bg, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,.2)',
            textDecoration: 'none', position: 'relative',
            transition: 'transform .2s, box-shadow .2s',
            transform: hovered === i ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {btn.icon}
          {hovered === i && (
            <span
              style={{
                position: 'absolute', left: 'calc(100% + 10px)',
                background: 'var(--color-navy-950)', color: '#fff',
                padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem',
                whiteSpace: 'nowrap', pointerEvents: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,.2)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {label}
            </span>
          )}
        </a>
        )
      })}
    </div>
  )
}
