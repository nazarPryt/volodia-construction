import Link from 'next/link'
import { PATH } from '@/config/PATH'

export default function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Ремонт Квартир</h3>
            <p className="text-foreground/60 text-sm">
              Професійний ремонт квартир у Києві. Якість, надійність, пунктуальність.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Навігація</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={PATH.SERVICES} className="text-foreground/60 hover:text-foreground transition-colors">
                  Послуги
                </Link>
              </li>
              <li>
                <Link href={PATH.PORTFOLIO} className="text-foreground/60 hover:text-foreground transition-colors">
                  Портфоліо
                </Link>
              </li>
              <li>
                <Link href={PATH.ABOUT} className="text-foreground/60 hover:text-foreground transition-colors">
                  Про майстра
                </Link>
              </li>
              <li>
                <Link href={PATH.CONTACT} className="text-foreground/60 hover:text-foreground transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Контакти</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+380000000000" className="text-foreground/60 hover:text-foreground transition-colors">
                  +380 (00) 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="viber://chat?number=380000000000"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Viber
                </a>
                <a
                  href="https://wa.me/380000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-foreground/60 mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ремонт Квартир. Всі права захищено.</p>
        </div>
      </div>
    </footer>
  )
}
