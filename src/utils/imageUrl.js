export function imageUrl(path) {
  if (!path) return null
  if (path.startsWith('http') || path.startsWith('/')) return path
  const base = process.env.NEXT_PUBLIC_BASE_URL || ''
  return `${base}${path}`
}
