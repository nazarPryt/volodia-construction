import { Metadata } from 'next'
import Image from 'next/image'
import CallButton from '@/components/CallButton'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { CONTACT_INFO } from '@/config/contacts'
import { PAGE_METADATA } from '@/config/metadata'

export const metadata: Metadata = PAGE_METADATA.portfolio

// TODO: Replace with CMS data
// Example structure for CMS integration:
interface PortfolioItem {
  id: string
  title: string
  category: string
  imageUrl: string
  description?: string
}

// Mock data - replace with actual CMS fetch
const portfolioItems: PortfolioItem[] = [
  // Example items - will be replaced with CMS data
  // {
  //   id: '1',
  //   title: 'Ремонт квартири в центрі',
  //   category: 'Ремонт під ключ',
  //   imageUrl: '/portfolio/project-1.jpg',
  //   description: 'Повна реконструкція 2-кімнатної квартири'
  // },
]

// Categories data
const categories = [
  {
    id: 'remont-pid-kluch',
    icon: '🏠',
    title: 'Ремонт під ключ',
    description: 'Повна реконструкція квартир',
  },
  {
    id: 'vanni-kimnaty',
    icon: '🛁',
    title: 'Ванні кімнати',
    description: 'Сучасний дизайн санвузлів',
  },
  {
    id: 'kukhni',
    icon: '🍳',
    title: 'Кухні',
    description: 'Функціональні кухонні простори',
  },
]

export default function PortfolioPage() {
  const hasPortfolioItems = portfolioItems.length > 0
  return (
    <>
      <section className="dark:to-background w-full bg-gradient-to-b from-blue-50 to-white py-16 dark:from-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold sm:text-5xl">Портфоліо</h1>
            <p className="text-foreground/70 text-lg">
              Переглядайте приклади наших робіт. Кожен проєкт виконаний з максимальною увагою до деталей.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          {!hasPortfolioItems && (
            <div className="mb-8 text-center">
              <p className="text-foreground/70">
                Фотографії наших робіт будуть додані найближчим часом. Зателефонуйте нам, щоб переглянути приклади
                особисто або отримати посилання на додаткові матеріали.
              </p>
            </div>
          )}

          {/* Portfolio Gallery */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hasPortfolioItems
              ? // Render actual portfolio items from CMS
                portfolioItems.map(item => (
                  <div
                    key={item.id}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay with project info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                        <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.category}</p>
                        {item.description && <p className="mt-2 text-xs text-white/70">{item.description}</p>}
                      </div>
                    </div>
                  </div>
                ))
              : // Placeholder items when no CMS data
                [1, 2, 3, 4, 5, 6].map(item => (
                  <div
                    key={item}
                    className="group bg-foreground/5 relative aspect-[4/3] overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
                  >
                    <div className="text-foreground/30 flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-2 text-5xl">📸</div>
                        <div className="text-sm">Проєкт {item}</div>
                        <div className="text-foreground/20 mt-1 text-xs">Фото незабаром</div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-foreground mb-8 text-center text-2xl font-bold">Категорії робіт</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(category => (
                <CategoryCard
                  key={category.id}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold !text-white">Хочете побачити більше прикладів?</h2>
          <p className="mb-8 text-lg !text-white/90">
            Зателефонуйте нам, і ми надішлемо додаткові фото та відео наших робіт
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              📞 Зателефонувати
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
