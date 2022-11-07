export const setItemInLS = (key: string, value: unknown) => {
  if (typeof value === 'string') {
    window.localStorage.setItem(key, value)
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getItemFormLS = <T = unknown>(key: string, initialValue?: T): T | null => {
  if (typeof window === 'undefined') return initialValue || null

  const value = window.localStorage.getItem(key) || null

  if (typeof value === 'string') {
    return value as T
  }

  return value ? (JSON.parse(value) as T) : null
}
