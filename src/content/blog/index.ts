import { posts as ru } from './ru'
import { posts as fr } from './fr'
import { posts as ar } from './ar'
import { posts as pt } from './pt'
import { posts as es } from './es'
import type { BlogPost } from '../../types'

export const blogI18n: Record<string, Record<string, Partial<BlogPost>>> = { ru, fr, ar, pt, es }
