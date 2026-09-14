'use client'

export default function RouteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section style={{ fontFamily: 'Inter, sans-serif', maxWidth: 600, margin: '120px auto', textAlign: 'center', padding: '0 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Something went wrong</h1>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: 32 }}>
        This page couldn&apos;t load correctly. Please try again or contact us on WhatsApp.
      </p>
      <button
        onClick={() => reset()}
        style={{ padding: '12px 32px', background: '#1B6BFF', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}
      >
        Try again
      </button>
    </section>
  )
}
