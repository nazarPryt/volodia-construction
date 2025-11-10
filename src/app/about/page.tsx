import { Metadata } from 'next'
import CallButton from '@/components/CallButton'
import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { CONTACT_INFO } from '@/config/contacts'

export const metadata: Metadata = {
  title: 'Про майстра | Ремонт Квартир',
  description: 'Досвідчений майстер з ремонту квартир. Більше 10 років досвіду, понад 200 успішно завершених проєктів.',
}

export default function AboutPage() {
  return (
    <>
      <section className="dark:to-background w-full bg-gradient-to-b from-blue-50 to-white py-16 dark:from-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold sm:text-5xl">Про майстра</h1>
            <p className="text-foreground/70 text-lg">
              Професійний досвід, відповідальний підхід та любов до своєї справи
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Photo Placeholder */}
            <div className="flex items-center justify-center">
              <div className="bg-foreground/5 aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
                <div className="text-foreground/30 flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">👨‍🔧</div>
                    <div className="text-sm">Фото майстра</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-foreground mb-6 text-3xl font-bold">Володимир Іваненко</h2>
              <div className="text-foreground/70 space-y-4">
                <p>
                  Вітаю! Мене звати Володимир, і я професійно займаюся ремонтом квартир вже понад 10 років. За цей час я
                  набув великого досвіду у всіх видах ремонтних робіт – від косметичного ремонту до капітальної
                  реконструкції.
                </p>
                <p>
                  Моя робота – це не просто заробіток, це справа, якою я захоплююся. Кожен проєкт для мене – це
                  можливість створити щось унікальне, втілити мрії клієнтів у реальність та зробити їхнє життя
                  комфортнішим.
                </p>
                <p>
                  Я віддаю перевагу чесності та відкритості у відносинах з клієнтами. Завжди обговорюю всі деталі перед
                  початком робіт, дотримуюся обумовлених термінів та бюджету. Для мене важливо, щоб кожен клієнт
                  залишався задоволеним результатом.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-foreground/70 text-sm">Років досвіду</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-foreground/70 text-sm">Проєктів</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-foreground/70 text-sm">Гарантія</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-foreground/70 text-sm">На зв&apos;язку</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="w-full bg-blue-50 py-16 dark:bg-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-foreground mb-12 text-center text-3xl font-bold">Кваліфікація та навички</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background rounded-lg p-6">
              <div className="mb-4 text-4xl">🎓</div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Освіта</h3>
              <p className="text-foreground/70 text-sm">
                Будівельний коледж за спеціальністю &ldquo;Оздоблювальні роботи&rdquo;. Регулярно проходжу курси
                підвищення кваліфікації.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="mb-4 text-4xl">🔧</div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Спеціалізація</h3>
              <p className="text-foreground/70 text-sm">
                Експертні знання у всіх видах оздоблювальних робіт, електриці, сантехніці. Можу виконати ремонт
                &ldquo;під ключ&rdquo; повністю.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="mb-4 text-4xl">📋</div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Сертифікати</h3>
              <p className="text-foreground/70 text-sm">
                Сертифіковані курси з монтажу гіпсокартону, укладання плитки, електромонтажних та сантехнічних робіт.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="mb-4 text-4xl">🛠️</div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Інструменти</h3>
              <p className="text-foreground/70 text-sm">
                Власний професійний інструмент європейських брендів. Можу працювати з будь-якими сучасними матеріалами.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="mb-4 text-4xl">💬</div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Консультації</h3>
              <p className="text-foreground/70 text-sm">
                Допоможу підібрати оптимальні матеріали та рішення, порадлю як зекономити без втрати якості.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="mb-4 text-4xl">🤝</div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Гарантія</h3>
              <p className="text-foreground/70 text-sm">
                Надаю письмову гарантію на всі види робіт. Завжди на зв&apos;язку навіть після завершення ремонту.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Principles */}
      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-foreground mb-12 text-center text-3xl font-bold">Мої принципи роботи</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                1
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Чесність та прозорість</h3>
                <p className="text-foreground/70">
                  Завжди говорю правду про терміни, ціни та можливі складнощі. Ніяких прихованих доплат.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                2
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Якість понад усе</h3>
                <p className="text-foreground/70">
                  Використовую тільки перевірені матеріали та технології. Кожен етап роботи контролюю особисто.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                3
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Пунктуальність</h3>
                <p className="text-foreground/70">
                  Приходжу вчасно, дотримуюсь графіка робіт. Поважаю час клієнта та цінію довіру.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                4
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Чистота на об&apos;єкті</h3>
                <p className="text-foreground/70">
                  Після кожного робочого дня прибираю за собою. Намагаюся мінімізувати незручності для клієнта.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                5
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">Відповідальність</h3>
                <p className="text-foreground/70">
                  Беру відповідальність за результат. Якщо щось пішло не так – виправлю за свій рахунок.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Готові почати співпрацю?</h2>
          <p className="mb-8 text-lg text-white/90">
            Зателефонуйте мені, щоб обговорити ваш проєкт. Безкоштовно виїду на об&apos;єкт для оцінки та консультації.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.PHONE.NUMBER}`}
              className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              📞 Зателефонувати
            </a>
            <Link
              href={PATH.PORTFOLIO}
              className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Переглянути роботи
            </Link>
          </div>
        </div>
      </section>

      <CallButton />
    </>
  )
}
