export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse" style={{ background: 'var(--color-paper-50, #f8f9fc)' }}>
      <div className="h-16 md:h-[68px]" style={{ background: 'var(--color-paper-100, #e5e7eb)' }} />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="h-4 w-24 rounded mb-4" style={{ background: 'var(--color-paper-100, #e5e7eb)' }} />
        <div className="h-10 md:h-14 w-3/4 rounded mb-4" style={{ background: 'var(--color-paper-100, #e5e7eb)' }} />
        <div className="h-5 w-1/2 rounded" style={{ background: 'var(--color-paper-100, #e5e7eb)' }} />
      </div>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-paper-100, #e5e7eb)' }}>
              <div className="h-48" />
              <div className="p-5 space-y-3">
                <div className="h-4 w-3/4 rounded" style={{ background: 'var(--color-paper-50, #f8f9fc)' }} />
                <div className="h-3 w-full rounded" style={{ background: 'var(--color-paper-50, #f8f9fc)' }} />
                <div className="h-3 w-1/2 rounded" style={{ background: 'var(--color-paper-50, #f8f9fc)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
