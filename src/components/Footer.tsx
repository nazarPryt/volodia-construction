import Link from 'next/link'
import { CONTACT_INFO } from '@/config/contacts'
import { NAVIGATION } from '@/config/navigation'

export default function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Ремонт Квартир</h3>
            <p className="text-foreground/60 text-sm">
              Професійний ремонт квартир у Тернополі. Якість, надійність, пунктуальність.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Навігація</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION.filter(item => item.name !== 'Головна').map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-foreground/60 hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Контакти</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  {CONTACT_INFO.PHONE.DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href={`https://t.me/${CONTACT_INFO.SOCIAL.TELEGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Telegram
                </a>
                <a
                  href={`viber://chat?number=${CONTACT_INFO.SOCIAL.VIBER}`}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Viber
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.SOCIAL.WHATSAPP}`}
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
          <p className="mt-2 text-xs opacity-80">
            Зроблено з ❤️{' '}
            <a
              href="https://www.linkedin.com/in/nazar-prytuliak"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-opacity hover:opacity-70 dark:text-gray-300"
            >
              Nazar Prytuliak
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
