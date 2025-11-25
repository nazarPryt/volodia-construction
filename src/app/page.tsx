import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import FeatureCard from '@/components/FeatureCard'
import CallButton from '@/components/CallButton'
import GradientMesh from '@/components/GradientMesh'
import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { CONTACT_INFO } from '@/config/contacts'
import { useLog } from '@/shared/log'

const services = [
  {
    icon: '🏠',
    title: 'Ремонт під ключ',
    description: 'Повний цикл робіт від демонтажу до фінішного оздоблення. Ідеально для нових квартир.',
  },
  {
    icon: '🎨',
    title: 'Косметичний ремонт',
    description: "Швидке оновлення інтер'єру: фарбування, шпалери, підлоги та інші оздоблювальні роботи.",
  },
  {
    icon: '🔨',
    title: 'Капітальний ремонт',
    description: 'Повна реконструкція приміщення з заміною комунікацій та перепланування.',
  },
  {
    icon: '⚡',
    title: 'Електрика',
    description: 'Монтаж проводки, установка розеток, світильників та електричних щитів.',
  },
  {
    icon: '🚿',
    title: 'Сантехніка',
    description: 'Заміна труб, установка сантехнічного обладнання, підключення приладів.',
  },
  {
    icon: '◼️',
    title: 'Плиткові роботи',
    description: 'Укладання керамічної плитки, керамограніту, мозаїки в кухнях та ванних.',
  },
]

const features = [
  {
    icon: '✅',
    title: 'Гарантія якості',
    description: 'Надаємо гарантію на всі види робіт. Використовуємо тільки перевірені матеріали.',
  },
  {
    icon: '⏱️',
    title: 'Дотримання термінів',
    description: 'Складаємо чіткий графік робіт та строго його дотримуємось без затримок.',
  },
  {
    icon: '💰',
    title: 'Прозора ціна',
    description: 'Фіксована вартість після оцінки. Без прихованих платежів та доплат.',
  },
  {
    icon: '🤝',
    title: 'Індивідуальний підхід',
    description: 'Враховуємо всі побажання клієнта та пропонуємо оптимальні рішення.',
  },
]

export default function Home() {
  useLog()
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="bg-background relative w-full overflow-hidden py-16">
        <GradientMesh variant="blue" opacity={0.1} />
        <div className="relative z-10 container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">Наші послуги</h2>
            <p className="text-foreground/70">
              Виконуємо всі види ремонтних робіт з високою якістю та дотриманням термінів
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={PATH.SERVICES}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={PATH.SERVICES}
              className="inline-block rounded-lg border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              Всі послуги та ціни
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="dark:from-background w-full bg-gradient-to-b from-white to-blue-50 py-16 dark:to-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">Наші роботи</h2>
            <p className="text-foreground/70">Переглядайте приклади виконаних проєктів</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for portfolio images - will be replaced with actual content */}
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className="group bg-foreground/5 relative aspect-[4/3] overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
              >
                <div className="text-foreground/30 flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">📸</div>
                    <div className="text-sm">Фото проєкту {item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={PATH.PORTFOLIO}
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Дивитись всі роботи
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background relative w-full overflow-hidden py-16">
        <GradientMesh variant="orange" opacity={0.09} />
        <div className="relative z-10 container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">Чому обирають нас</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Готові почати ремонт?</h2>
          <p className="mb-8 text-lg text-white/90">
            Зателефонуйте нам прямо зараз для безкоштовної консультації та оцінки вартості робіт
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              📞 Зателефонувати зараз
            </a>
            <Link
              href={PATH.CONTACT}
              className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Написати повідомлення
            </Link>
          </div>
        </div>
      </section>

      <CallButton />
    </>
  )
}
