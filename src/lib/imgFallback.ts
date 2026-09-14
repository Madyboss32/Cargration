import type { SyntheticEvent } from 'react'

const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90"><rect width="120" height="90" fill="#eef1f6"/><g fill="#c3cad6"><path d="M18 61 L26 41 Q28 36 33 36 L87 36 Q92 36 94 41 L102 61 Z"/><rect x="13" y="61" width="14" height="9" rx="3"/><rect x="93" y="61" width="14" height="9" rx="3"/><circle cx="33" cy="63" r="6" fill="#eef1f6" stroke="#c3cad6" stroke-width="2.5"/><circle cx="87" cy="63" r="6" fill="#eef1f6" stroke="#c3cad6" stroke-width="2.5"/></g></svg>`

export const FALLBACK_IMG = `data:image/svg+xml,${encodeURIComponent(PLACEHOLDER_SVG)}`

export function imgError(e: SyntheticEvent<HTMLImageElement>): void {
  const t = e.currentTarget
  if (t && t.dataset.fb === undefined) {
    t.dataset.fb = '1'
    t.src = FALLBACK_IMG
  }
}