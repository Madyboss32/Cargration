'use client'
import { useI18n } from '../i18n/I18nProvider'
import LLink from '../i18n/LLink'

export default function NotFoundPage() {
  const { t } = useI18n()
  return (
    <main className="min-h-[70vh] flex items-center justify-center" style={{ background: 'var(--color-paper-50)' }}>
      <div className="text-center px-4">
        <p className="font-display text-7xl md:text-9xl font-bold mb-4" style={{ color: 'var(--color-blue-500)' }}>{t('notfound.code')}</p>
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{t('notfound.title')}</h1>
        <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--color-ink-700)' }}>
          {t('notfound.sub')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <LLink href="/" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
            {t('common.backHome')}
          </LLink>
          <LLink href="/inventory" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>
            {t('detail.browseInventory')}
          </LLink>
        </div>
      </div>
    </main>
  )
}
