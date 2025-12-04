import Link from 'next/link'
import Image from 'next/image'
import { NAVIGATION } from '@/config/navigation'
import { OwnerInfo } from '@/sanity/types/ownerInfo'

interface FooterProps {
  ownerInfo: OwnerInfo
}

export default function Footer({ ownerInfo }: FooterProps) {
  return (
    <footer className="border-border bg-background relative w-full overflow-hidden border-t">
      {/* Background image - only visible on light theme */}
      <div className="absolute inset-0 dark:hidden">
        <Image
          src="/bg-2.webp"
          alt="Background pattern"
          fill
          className="object-cover opacity-15"
          priority={false}
          quality={75}
        />
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-medium">Volodia</h3>
            <p className="text-text-muted text-sm">
              Професійний ремонт квартир у Тернополі. Якість, надійність, пунктуальність.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-medium">Навігація</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION.filter(item => item.name !== 'Головна').map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-text-muted hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-medium">Контакти</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${ownerInfo.phone.number}`}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  {ownerInfo.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${ownerInfo.email}`} className="text-text-muted hover:text-primary transition-colors">
                  {ownerInfo.email}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href={`https://t.me/${ownerInfo.social.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Telegram
                </a>
                <a
                  href={`viber://chat?number=${ownerInfo.social.viber}`}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  Viber
                </a>
                <a
                  href={`https://wa.me/${ownerInfo.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-text-muted mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ремонт Квартир. Всі права захищено.</p>
          <p className="text-text-dim mt-2 text-xs">
            Зроблено з ❤️{' '}
            <a
              href="https://www.linkedin.com/in/nazar-prytuliak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-primary underline transition-colors"
            >
              Nazar Prytuliak
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
