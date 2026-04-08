'use client'

import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-10 w-10" />

  const themes = [
    { id: 'system', name: 'System', icon: <FiMonitor /> },
    { id: 'light', name: 'Jasny', icon: <FiSun /> },
    { id: 'dark', name: 'Ciemny', icon: <FiMoon /> },
  ]

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-2xl">
        {resolvedTheme === 'dark' ? <FiMoon /> : <FiSun />}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <ul className="bg-background absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-md border border-gray-200 shadow-lg dark:border-gray-700">
            {themes.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => {
                    setTheme(t.id)
                    setIsOpen(false)
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    theme === t.id ? 'font-semibold text-blue-500' : 'text-foreground'
                  }`}
                >
                  <span className="text-lg">{t.icon}</span>
                  {t.name}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
