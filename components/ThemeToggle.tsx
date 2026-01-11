'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm
        hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      <span className="text-base">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className="hidden sm:inline">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
