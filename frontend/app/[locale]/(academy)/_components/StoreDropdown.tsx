'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownProps {
  label: string
  items: DropdownItem[]
}

export function StoreDropdown({ label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
  }

  return (
    <div
      className="relative inline-block h-full text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* PRZYCISK TRIGGER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-foreground/60 hover:text-foreground flex h-full items-center gap-1 border-b-2 px-1 font-sans uppercase transition-colors ${
          isOpen ? 'text-foreground border-foreground/30' : 'border-transparent'
        }`}
      >
        {label}
        <FiChevronDown className="text-lg" />
      </button>

      {/* MENU DROPDOWN  */}
      <div
        className={`absolute left-1/2 z-50 w-48 origin-top -translate-x-1/2 pt-4 transition-all duration-200 ease-out ${
          isOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <div className="bg-background border-foreground/10 rounded-md border shadow-lg">
          <div className="py-1" role="menu">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-foreground/80 hover:bg-foreground/5 hover:text-foreground block px-4 py-2 font-sans uppercase transition-colors"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
