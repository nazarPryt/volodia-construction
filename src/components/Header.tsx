'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Головна', href: '/' },
  { name: 'Послуги', href: '/services' },
  { name: 'Портфоліо', href: '/portfolio' },
  { name: 'Про майстра', href: '/about' },
  { name: 'Контакти', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-foreground text-xl font-bold">
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
          href="tel:+380000000000"
          className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:block"
        >
          Зателефонувати
        </a>

        {/* Mobile menu placeholder - can be enhanced with hamburger menu later */}
        <a
          href="tel:+380000000000"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:hidden"
        >
          Дзвінок
        </a>
      </nav>
    </header>
  )
}
