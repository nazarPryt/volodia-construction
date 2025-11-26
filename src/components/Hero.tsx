import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { CONTACT_INFO } from '@/config/contacts'
import BenefitCard from '@/components/BenefitCard'

const benefits = [
  { value: '10+', label: 'Років досвіду' },
  { value: '200+', label: 'Завершених проєктів' },
  { value: '100%', label: 'Задоволених клієнтів' },
  { value: '24/7', label: 'Підтримка звязку' },
]

export default function Hero() {
  return (
    <section className="bg-background relative w-full overflow-hidden py-20 md:py-32">
      <div className="bg-grid absolute inset-0 opacity-50" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge/Tag */}
          <div className="border-border bg-background-secondary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            <span className="text-text-dim text-xs font-medium tracking-wider uppercase">Професійний ремонт</span>
          </div>

          <h1 className="font-heading text-foreground mb-6 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Якісний ремонт квартир{' '}
            <span className="from-primary to-primary-hover bg-gradient-to-r bg-clip-text text-transparent">
              під ключ
            </span>
          </h1>

          <p className="text-text-muted mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            Професійний досвід, індивідуальний підхід та гарантія якості. Перетворюємо ваші квартири на комфортні
            простори для життя.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
              className="btn-primary inline-flex items-center justify-center"
            >
              Замовити дзвінок
            </a>
            <Link
              href={PATH.PORTFOLIO}
              className="border-foreground text-foreground hover:bg-foreground hover:text-background inline-flex items-center justify-center border bg-transparent px-8 py-4 text-base font-medium transition-all"
            >
              Дивитись роботи
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} value={benefit.value} label={benefit.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
