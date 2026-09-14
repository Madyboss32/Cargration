import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(
    { ok: true, status: 'ok' },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}