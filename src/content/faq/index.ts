import { items as ru } from './ru'
import { items as fr } from './fr'
import { items as ar } from './ar'
import { items as pt } from './pt'
import { items as es } from './es'

type FaqOverride = { q?: string; a?: string }

export const faqI18n: Record<string, Record<string, FaqOverride>> = {
  ru, fr, ar, pt, es
}
