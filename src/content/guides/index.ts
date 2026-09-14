import { meta as ruM, guides as ruG } from './ru'
import { meta as frM, guides as frG } from './fr'
import { meta as arM, guides as arG } from './ar'
import { meta as ptM, guides as ptG } from './pt'
import { meta as esM, guides as esG } from './es'
import type { CountryGuide } from '../../types'

export interface GuideBundle {
  meta: Record<string, { name?: string; transit?: string }>
  guides: Record<string, Partial<Omit<CountryGuide, 'slug'>>>
}

export const guideI18n: Record<string, GuideBundle> = {
  ru: { meta: ruM, guides: ruG },
  fr: { meta: frM, guides: frG },
  ar: { meta: arM, guides: arG },
  pt: { meta: ptM, guides: ptG },
  es: { meta: esM, guides: esG }
}
