import { Metadata } from 'next'
import CallButton from '@/components/CallButton'
import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { CONTACT_INFO } from '@/config/contacts'

export const metadata: Metadata = {
  title: 'Портфоліо | Ремонт Квартир',
  description: 'Наші роботи: фото до та після ремонту квартир. Переглядайте завершені проєкти.',
}

export default function PortfolioPage() {
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
          <div className="mb-8 text-center">
            <p className="text-foreground/70">
              Фотографії наших робіт будуть додані найближчим часом. Зателефонуйте нам, щоб переглянути приклади
              особисто або отримати посилання на додаткові матеріали.
            </p>
          </div>

          {/* Placeholder Gallery */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map(item => (
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

          {/* Categories placeholder */}
          <div className="mt-16">
            <h2 className="text-foreground mb-8 text-center text-2xl font-bold">Категорії робіт</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="mb-3 text-4xl">🏠</div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Ремонт під ключ</h3>
                <p className="text-foreground/70 text-sm">Повна реконструкція квартир</p>
              </div>
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="mb-3 text-4xl">🛁</div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Ванні кімнати</h3>
                <p className="text-foreground/70 text-sm">Сучасний дизайн санвузлів</p>
              </div>
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="mb-3 text-4xl">🍳</div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Кухні</h3>
                <p className="text-foreground/70 text-sm">Функціональні кухонні простори</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Хочете побачити більше прикладів?</h2>
          <p className="mb-8 text-lg text-white/90">
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
