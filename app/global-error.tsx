'use client'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en" dir="ltr">
      <body style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#1a1a2e', margin: 0, padding: 0 }}>
        <section style={{ maxWidth: 600, margin: '120px auto', textAlign: 'center', padding: '0 20px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Something went wrong</h1>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: 32 }}>
            We apologize for the inconvenience. Please try again or reach us on WhatsApp if the issue persists.
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: '12px 32px', background: '#1B6BFF', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}
          >
            Try again
          </button>
        </section>
      </body>
    </html>
  )
}
