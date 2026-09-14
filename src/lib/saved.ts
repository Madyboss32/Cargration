'use client'

export interface SavedVehicle {
  id: string
  name: string
  brand: string
  trim: string
  price: number
  img: string
  type: string
  fuel: string
  year: string
  km: number
  transmission: string
  drive: string
  condition: string
}

const KEY = 'cg_saved_v1'
const EVENT = 'cg-saved-changed'
const MAX_SAVED = 12

function read(): SavedVehicle[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    const list = raw ? JSON.parse(raw) : []
    return Array.isArray(list) ? list.filter((v) => v && typeof v.id === 'string') : []
  } catch {
    return []
  }
}

function write(list: SavedVehicle[]): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list))
    window.dispatchEvent(new Event(EVENT))
  } catch {}
}

export function getSaved(): SavedVehicle[] {
  return read()
}

export function isSaved(id: string): boolean {
  return read().some((v) => v.id === id)
}

export function toggleSaved(vehicle: SavedVehicle): boolean {
  const list = read()
  const idx = list.findIndex((v) => v.id === vehicle.id)
  if (idx >= 0) {
    list.splice(idx, 1)
    write(list)
    return false
  }
  list.unshift({ ...vehicle, id: vehicle.id || String(Date.now()) })
  if (list.length > MAX_SAVED) list.length = MAX_SAVED
  write(list)
  return true
}

export function removeSaved(id: string): void {
  write(read().filter((v) => v.id !== id))
}

export function clearSaved(): void {
  write([])
}

export function subscribe(fn: () => void): () => void {
  window.addEventListener(EVENT, fn)
  window.addEventListener('storage', fn)
  return () => {
    window.removeEventListener(EVENT, fn)
    window.removeEventListener('storage', fn)
  }
}
