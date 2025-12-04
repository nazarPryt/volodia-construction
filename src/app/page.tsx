import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import FeatureCard from '@/components/FeatureCard'
import CallButton from '@/components/CallButton'
import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { client } from '@/sanity/lib/client'
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries'
import { HomePageData } from '@/sanity/types/homePage'
import { getOwnerInfo } from '@/sanity/lib/getOwnerInfo'

// Fallback data in case Sanity is unavailable
const fallbackData: HomePageData = {
  hero: {
    badge: 'Професійний ремонт',
    title: 'Якісний ремонт квартир',
    highlightedText: 'під ключ',
    description:
      'Професійний досвід, індивідуальний підхід та гарантія якості. Перетворюємо ваші квартири на комфортні простори для життя.',
    ctaPrimaryText: 'Замовити дзвінок',
    ctaSecondaryText: 'Дивитись роботи',
  },
  benefits: [
    { value: '10+', label: 'Років досвіду' },
    { value: '200+', label: 'Завершених проєктів' },
    { value: '100%', label: 'Задоволених клієнтів' },
    { value: '24/7', label: 'Підтримка звязку' },
  ],
  servicesSection: {
    title: 'Наші послуги',
    description: 'Виконуємо всі види ремонтних робіт з високою якістю та дотриманням термінів',
    buttonText: 'Всі послуги та ціни',
  },
  services: [
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
  ],

  portfolioSection: {
    title: 'Наші роботи',
    description: 'Переглядайте приклади виконаних проєктів',
    buttonText: 'Дивитись всі роботи',
  },
  featuresSection: {
    title: 'Чому обирають нас',
  },
  features: [
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
  ],
  ctaSection: {
    title: 'Готові почати ремонт?',
    description: 'Зателефонуйте нам прямо зараз для безкоштовної консультації та оцінки вартості робіт',
    primaryButtonText: '📞 Зателефонувати зараз',
    secondaryButtonText: 'Написати повідомлення',
  },
}

export default async function Home() {
  // Fetch home page data from Sanity
  let homePageData: HomePageData | null = null

  try {
    homePageData = await client.fetch(HOME_PAGE_QUERY, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching home page data from Sanity:', error)
  }

  // Use Sanity data if available, otherwise fallback to hardcoded data
  const data = homePageData || fallbackData

  // Fetch owner info
  const ownerInfo = await getOwnerInfo()
  return (
    <>
      <Hero hero={data.hero} benefits={data.benefits} ownerInfo={ownerInfo} />

      {/* Services Preview */}
      <section className="bg-background relative w-full overflow-hidden py-16">
        <div className="relative z-10 container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center" data-aos="fade-up">
            <h2 className="text-foreground mb-4 text-3xl font-bold">{data.servicesSection.title}</h2>
            <p className="text-foreground/70">{data.servicesSection.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={PATH.SERVICES}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              href={PATH.SERVICES}
              className="inline-block rounded-lg border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              {data.servicesSection.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center" data-aos="fade-up">
            <h2 className="text-foreground mb-4 text-3xl font-bold">{data.portfolioSection.title}</h2>
            <p className="text-text-muted">{data.portfolioSection.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for portfolio images - will be replaced with actual content */}
            {[1, 2, 3].map(item => (
              <div
                key={item}
                data-aos="zoom-in"
                data-aos-delay={item * 100}
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

          <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="200">
            <Link href={PATH.PORTFOLIO} className="btn-primary inline-block">
              {data.portfolioSection.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background relative w-full overflow-hidden py-16">
        <div className="relative z-10 container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center" data-aos="fade-up">
            <h2 className="text-foreground mb-4 text-3xl font-bold">{data.featuresSection.title}</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold !text-white" data-aos="fade-up">
            {data.ctaSection.title}
          </h2>
          <p className="mb-8 text-lg !text-white/90" data-aos="fade-up" data-aos-delay="100">
            {data.ctaSection.description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="200">
            <a
              href={`tel:${ownerInfo.phone.number}`}
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              {data.ctaSection.primaryButtonText}
            </a>
            <Link
              href={PATH.CONTACT}
              className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {data.ctaSection.secondaryButtonText}
            </Link>
          </div>
        </div>
      </section>

      <CallButton ownerInfo={ownerInfo} />
    </>
  )
}
