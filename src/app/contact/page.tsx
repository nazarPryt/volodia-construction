import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import CallButton from '@/components/CallButton'
import FAQSection from '@/components/FAQSection'
import { PAGE_METADATA } from '@/config/metadata'
import { getOwnerInfo } from '@/sanity/lib/getOwnerInfo'
import { client } from '@/sanity/lib/client'
import { CONTACT_PAGE_QUERY } from '@/sanity/lib/queries'
import { ContactPageData } from '@/sanity/types/contactPage'

export const metadata: Metadata = PAGE_METADATA.contact

// Fallback FAQ data if Sanity is unavailable
const fallbackFAQData: ContactPageData = {
  faqSection: {
    title: 'Часті питання',
    items: [
      {
        question: 'Як швидко ви зможете почати роботу?',
        answer:
          "Зазвичай я можу виїхати на оцінку об'єкта протягом 1-2 днів. Початок робіт можливий через 3-7 днів після узгодження всіх деталей та підписання договору.",
      },
      {
        question: "Чи безкоштовний виїзд на об'єкт?",
        answer:
          "Так, я безкоштовно виїжджаю на об'єкт для оцінки обсягу робіт та консультації. Це займає близько 30-60 хвилин.",
      },
      {
        question: 'Як відбувається оплата?',
        answer:
          'Оплата здійснюється поетапно відповідно до виконаних робіт. Зазвичай це 30% аванс, 40% після завершення основних робіт, 30% після повного завершення.',
      },
      {
        question: 'Надаєте гарантію?',
        answer:
          "Так, я надаю письмову гарантію на всі види робіт від 1 до 3 років залежно від типу робіт. Завжди підтримую зв'язок з клієнтами після завершення ремонту.",
      },
      {
        question: 'Чи можете допомогти з вибором матеріалів?',
        answer:
          'Звичайно! Я маю великий досвід роботи з різними матеріалами та можу порадити оптимальні варіанти виходячи з вашого бюджету та побажань. При необхідності можу супроводжувати при закупівлі.',
      },
    ],
  },
}

export default async function ContactPage() {
  // Fetch owner info (actual contact data)
  const ownerInfo = await getOwnerInfo()

  // Fetch FAQ data from Sanity
  let contactPageData: ContactPageData | null = null

  try {
    contactPageData = await client.fetch(CONTACT_PAGE_QUERY, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching contact page data from Sanity:', error)
  }

  // Use Sanity FAQ data if available, otherwise fallback
  const faqData = contactPageData?.faqSection || fallbackFAQData.faqSection

  return (
    <>
      {/* Page Header */}
      <section className="dark:to-background w-full bg-gradient-to-b from-blue-50 to-white py-16 dark:from-blue-950/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <h1 className="text-foreground mb-4 text-4xl font-bold sm:text-5xl">Контакти</h1>
            <p className="text-foreground/70 text-lg">
              Зв'яжіться з нами зручним для вас способом. Ми завжди на зв'язку та готові відповісти на всі питання.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h2 className="text-foreground mb-8 text-2xl font-bold">Як з нами зв'язатися</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-2xl text-white">
                    📞
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 font-semibold">Телефон</h3>
                    <a
                      href={`tel:${ownerInfo.phone.number}`}
                      className="text-lg text-blue-600 transition-colors hover:text-blue-700"
                    >
                      {ownerInfo.phone.display}
                    </a>
                    <p className="text-foreground/60 mt-1 text-sm">Дзвоніть щодня з 8:00 до 20:00</p>
                  </div>
                </div>

                {/* Messengers */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-2xl text-white">
                    💬
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 font-semibold">Месенджери</h3>
                    <div className="flex flex-col gap-2 text-sm">
                      <a
                        href={`https://t.me/${ownerInfo.social.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 transition-colors hover:text-blue-700"
                      >
                        Telegram: @{ownerInfo.social.telegram}
                      </a>
                      <a
                        href={`viber://chat?number=${ownerInfo.social.viber}`}
                        className="text-blue-600 transition-colors hover:text-blue-700"
                      >
                        Viber: {ownerInfo.phone.display}
                      </a>
                      <a
                        href={`https://wa.me/${ownerInfo.social.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 transition-colors hover:text-blue-700"
                      >
                        WhatsApp: {ownerInfo.phone.display}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-2xl text-white">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 font-semibold">Email</h3>
                    <a
                      href={`mailto:${ownerInfo.email}`}
                      className="text-blue-600 transition-colors hover:text-blue-700"
                    >
                      {ownerInfo.email}
                    </a>
                    <p className="text-foreground/60 mt-1 text-sm">Відповідаємо протягом 24 годин</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-2xl text-white">
                    📍
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 font-semibold">Робочий регіон</h3>
                    <p className="text-foreground/70">м. Тернопіль та Тернопільська область</p>
                    <p className="text-foreground/60 mt-1 text-sm">Безкоштовний виїзд для оцінки вартості робіт</p>
                  </div>
                </div>
              </div>

              {/* Work Schedule */}
              <div className="mt-10 rounded-lg bg-blue-50 p-6 dark:bg-blue-950/20">
                <h3 className="text-foreground mb-4 text-lg font-semibold">Графік роботи</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Понеділок - П'ятниця</span>
                    <span className="text-foreground font-medium">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Субота</span>
                    <span className="text-foreground font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Неділя</span>
                    <span className="text-foreground font-medium">За домовленістю</span>
                  </div>
                </div>
                <p className="text-foreground/60 mt-4 text-sm">📱 У невідкладних випадках дзвоніть у будь-який час</p>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <div className="bg-card rounded-lg border p-6 lg:p-8">
                <h2 className="text-foreground mb-6 text-2xl font-bold">Напишіть нам</h2>
                <p className="text-foreground/70 mb-6">
                  Заповніть форму, і ми зв'яжемося з вами протягом години у робочий час
                </p>
                <ContactForm ownerInfo={ownerInfo} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqData={faqData} />

      <CallButton ownerInfo={ownerInfo} />
    </>
  )
}
