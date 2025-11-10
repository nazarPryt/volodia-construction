'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { PATH } from '@/config/PATH'
import { CONTACT_INFO } from '@/config/contacts'

const navigation = [
  { name: 'Головна', href: PATH.HOME },
  { name: 'Послуги', href: PATH.SERVICES },
  { name: 'Портфоліо', href: PATH.PORTFOLIO },
  { name: 'Про майстра', href: PATH.ABOUT },
  { name: 'Контакти', href: PATH.CONTACT },
]

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href={PATH.HOME} className="text-foreground text-xl font-bold">
            Ремонт Квартир
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 md:flex">
            {navigation.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`hover:text-foreground text-sm font-medium transition-colors ${
                    pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:block"
          >
            Зателефонувати
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`bg-foreground block h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`bg-foreground block h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`bg-foreground block h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Backdrop Overlay with Blur - Covers entire page */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md transition-opacity duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar (Slide from Right) */}
      <div
        ref={mobileMenuRef}
        className={`bg-background fixed top-0 right-0 z-[70] h-screen w-80 max-w-[85vw] overflow-hidden shadow-2xl transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <span className="text-foreground text-lg font-bold">Меню</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:bg-foreground/5 rounded-lg p-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-2">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                        : 'text-foreground/80 hover:bg-foreground/5 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call Button at Bottom */}
          <div className="border-t px-6 py-4">
            <a
              href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
              className="block rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Зателефонувати
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
