import Link from 'next/link'

export default function Hero() {
  return (
    <section className="dark:to-background relative w-full bg-gradient-to-b from-blue-50 to-white py-20 dark:from-blue-950/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Якісний ремонт квартир{' '}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">під ключ</span>
          </h1>
          <p className="text-foreground/70 mb-8 text-lg sm:text-xl">
            Професійний досвід, індивідуальний підхід та гарантія якості. Перетворюємо ваші квартири на комфортні
            простори для життя.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+380000000000"
              className="rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Замовити дзвінок
            </a>
            <Link
              href="/portfolio"
              className="rounded-lg border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              Дивитись роботи
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-blue-600">10+</div>
            <div className="text-foreground text-sm font-medium">Років досвіду</div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-blue-600">200+</div>
            <div className="text-foreground text-sm font-medium">Завершених проєктів</div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-blue-600">100%</div>
            <div className="text-foreground text-sm font-medium">Задоволених клієнтів</div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-blue-600">24/7</div>
            <div className="text-foreground text-sm font-medium">Підтримка зв&apos;язку</div>
          </div>
        </div>
      </div>
    </section>
  )
}
