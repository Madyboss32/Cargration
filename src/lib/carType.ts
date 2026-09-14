export function mapCarType(type?: string, fuel?: string): string {
  if (fuel && /electric|hybrid|reev/i.test(fuel)) return 'ev'
  switch (type) {
    case 'pickup':
    case 'truck':
    case 'van':
      return 'truck'
    case 'suv':
    case 'mpv':
      return 'suv'
    default:
      return 'sedan'
  }
}
