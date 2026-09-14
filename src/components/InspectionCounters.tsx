'use client'
import { useState, useRef, useEffect } from 'react'

export default function Counter({ target, s = '' }: { target: number; s?: string }) {
  const [c, setC] = useState(0)
  const [start, setStart] = useState(false)
  const r = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = r.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStart(true) }, { threshold: .3 })
    o.observe(el); return () => o.disconnect()
  }, [])
  useEffect(() => {
    if (!start) return; let v = 0; const inc = target / (2000 / 16); let raf: number
    const fn = () => { v += inc; if (v >= target) { setC(target); return }; setC(Math.floor(v)); raf = requestAnimationFrame(fn) }
    raf = requestAnimationFrame(fn); return () => cancelAnimationFrame(raf)
  }, [start, target])
  return <span ref={r}>{c.toLocaleString()}{s}</span>
}