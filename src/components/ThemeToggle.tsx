'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="hover:bg-background-card flex h-10 w-10 items-center justify-center rounded-[--radius-button] transition-colors"
        aria-label="Toggle theme"
      >
        <span className="text-xl">🌓</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:bg-background-card flex h-10 w-10 items-center justify-center rounded-[--radius-button] transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
    </button>
  )
}
