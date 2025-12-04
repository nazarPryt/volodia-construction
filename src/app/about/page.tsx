import { Metadata } from 'next'
import CallButton from '@/components/CallButton'
import Link from 'next/link'
import { PATH } from '@/config/PATH'
import { PAGE_METADATA } from '@/config/metadata'
import PageHeader from '@/components/PageHeader'
import QualificationCard from '@/components/QualificationCard'
import PrincipleItem from '@/components/PrincipleItem'
import StructuredData from '@/components/StructuredData'
import { client } from '@/sanity/lib/client'
import { getOwnerInfo } from '@/sanity/lib/getOwnerInfo'
import { ABOUT_PAGE_QUERY } from '@/sanity/lib/queries'
import { AboutPageData } from '@/sanity/types/aboutPage'

export const metadata: Metadata = PAGE_METADATA.about

// Fallback data in case Sanity is unavailable
const fallbackData: AboutPageData = {
  pageHeader: {
    title: 'Про нас',
    description: 'Професійний досвід, відповідальний підхід та любов до своєї справи',
  },
  qualificationsSection: {
    title: 'Кваліфікація та навички',
  },
  qualifications: [
    {
      icon: '🔧',
      title: 'Спеціалізація',
      description:
        'Експертні знання у всіх видах оздоблювальних робіт, електриці, сантехніці. Можу виконати ремонт "під ключ" повністю.',
    },
    {
      icon: '📋',
      title: 'Сертифікати',
      description:
        'Сертифіковані курси з монтажу гіпсокартону, укладання плитки, електромонтажних та сантехнічних робіт.',
    },
    {
      icon: '🛠️',
      title: 'Інструменти',
      description:
        'Власний професійний інструмент європейських брендів. Можу працювати з будь-якими сучасними матеріалами.',
    },
    {
      icon: '💬',
      title: 'Консультації',
      description: 'Допоможу підібрати оптимальні матеріали та рішення, порадлю як зекономити без втрати якості.',
    },
    {
      icon: '🤝',
      title: 'Гарантія',
      description: 'Надаю гарантію на всі види робіт. Завжди на звязку навіть після завершення ремонту.',
    },
  ],
  principlesSection: {
    title: 'Мої принципи роботи',
  },
  principles: [
    {
      title: 'Чесність та прозорість',
      description: 'Завжди говорю правду про терміни, ціни та можливі складнощі. Ніяких прихованих доплат.',
    },
    {
      title: 'Якість понад усе',
      description: 'Використовую тільки перевірені матеріали та технології. Кожен етап роботи контролюю особисто.',
    },
    {
      title: 'Пунктуальність',
      description: 'Приходжу вчасно, дотримуюсь графіка робіт. Поважаю час клієнта та цінію довіру.',
    },
    {
      title: 'Чистота на обєкті',
      description: 'Після кожного робочого дня прибираю за собою. Намагаюся мінімізувати незручності для клієнта.',
    },
    {
      title: 'Відповідальність',
      description: 'Беру відповідальність за результат. Якщо щось пішло не так – виправлю за свій рахунок.',
    },
  ],
  ctaSection: {
    title: 'Готові почати співпрацю?',
    description:
      'Зателефонуйте мені, щоб обговорити ваш проєкт. Безкоштовно виїду на обєкт для оцінки та консультації.',
    primaryButtonText: '📞 Зателефонувати',
    secondaryButtonText: 'Переглянути роботи',
  },
}

export default async function AboutPage() {
  // Fetch about page data from Sanity
  let aboutPageData: AboutPageData | null = null

  try {
    aboutPageData = await client.fetch(ABOUT_PAGE_QUERY, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Error fetching about page data from Sanity:', error)
  }

  // Use Sanity data if available, otherwise fallback to hardcoded data
  const data = aboutPageData || fallbackData

  // Fetch owner info
  const ownerInfo = await getOwnerInfo()

  return (
    <>
      <StructuredData type="about" ownerInfo={ownerInfo} />
      <PageHeader title={data.pageHeader.title} description={data.pageHeader.description} />

      {/*<section className="bg-background w-full py-16">*/}
      {/*  <div className="container mx-auto max-w-7xl px-4">*/}
      {/*    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">*/}
      {/*       Photo Placeholder */}
      {/*      <div className="flex items-center justify-center">*/}
      {/*        <div className="border-border bg-background-card aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg border">*/}
      {/*          <div className="text-text-dim flex h-full items-center justify-center">*/}
      {/*            <div className="text-center">*/}
      {/*              <div className="mb-4 text-6xl">👨‍🔧</div>*/}
      {/*              <div className="text-sm">Фото майстра</div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      /!* Content *!/*/}
      {/*      <div className="flex flex-col justify-center">*/}
      {/*          <h2 className="font-heading text-foreground mb-6 text-3xl font-medium">Володимир Іваненко</h2>*/}
      {/*          <div className="text-text-muted space-y-4">*/}
      {/*            <p>*/}
      {/*              Вітаю! Мене звати Володимир, і я професійно займаюся ремонтом квартир вже понад 10 років. За цей час я*/}
      {/*              набув великого досвіду у всіх видах ремонтних робіт – від косметичного ремонту до капітальної*/}
      {/*              реконструкції.*/}
      {/*            </p>*/}
      {/*            <p>*/}
      {/*              Моя робота – це не просто заробіток, це справа, якою я захоплююся. Кожен проєкт для мене – це*/}
      {/*              можливість створити щось унікальне, втілити мрії клієнтів у реальність та зробити їхнє життя*/}
      {/*              комфортнішим.*/}
      {/*            </p>*/}
      {/*            <p>*/}
      {/*              Я віддаю перевагу чесності та відкритості у відносинах з клієнтами. Завжди обговорюю всі деталі перед*/}
      {/*              початком робіт, дотримуюся обумовлених термінів та бюджету. Для мене важливо, щоб кожен клієнт*/}
      {/*              залишався задоволеним результатом.*/}
      {/*            </p>*/}
      {/*          </div>*/}

      {/*        /!* Stats *!/*/}
      {/*        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">*/}
      {/*          {stats.map((stat, index) => (*/}
      {/*            <div key={index}>*/}
      {/*              <div className="font-heading text-primary mb-1 text-3xl font-medium">{stat.value}</div>*/}
      {/*              <div className="text-text-muted text-sm">{stat.label}</div>*/}
      {/*            </div>*/}
      {/*          ))}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Qualifications */}
      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-foreground mb-12 text-center text-3xl font-medium" data-aos="fade-up">
            {data.qualificationsSection.title}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.qualifications.map((qualification, index) => (
              <QualificationCard key={index} {...qualification} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Principles */}
      <section className="bg-background w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-foreground mb-12 text-center text-3xl font-medium" data-aos="fade-up">
            {data.principlesSection.title}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {data.principles.map((principle, index) => (
              <PrincipleItem key={index} number={index + 1} {...principle} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16">
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
              className="inline-flex items-center justify-center rounded-lg border border-white bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              {data.ctaSection.primaryButtonText}
            </a>
            <Link
              href={PATH.PORTFOLIO}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
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
