import { Metadata } from 'next'

// Base site information
export const SITE_CONFIG = {
  name: 'Ремонт Квартир Тернопіль',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com',
  locale: 'uk_UA',
  defaultImage: '/og-image.svg',
  defaultImageWidth: 1200,
  defaultImageHeight: 630,
} as const

// Common metadata templates
export const BASE_METADATA = {
  title: 'Ремонт Квартир | Професійний майстер у Тернополі',
  description:
    'Якісний ремонт квартир під ключ у Тернополі. Косметичний та капітальний ремонт. Досвідчений майстер, доступні ціни.',
} as const

// Generate Open Graph metadata with optional overrides
interface OpenGraphConfig {
  title?: string
  description?: string
  type?: 'website' | 'profile' | 'article'
  image?: string
  imageWidth?: number
  imageHeight?: number
  imageAlt?: string
}

export function generateMetadata(config: {
  title: string
  description: string
  openGraph?: OpenGraphConfig
}): Metadata {
  const ogTitle = config.openGraph?.title || config.title
  const ogDescription = config.openGraph?.description || config.description
  const ogType = config.openGraph?.type || 'website'
  const ogImage = config.openGraph?.image || SITE_CONFIG.defaultImage
  const ogImageWidth = config.openGraph?.imageWidth || SITE_CONFIG.defaultImageWidth
  const ogImageHeight = config.openGraph?.imageHeight || SITE_CONFIG.defaultImageHeight
  const ogImageAlt = config.openGraph?.imageAlt || ogTitle

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: ogType,
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  }
}

// Pre-configured metadata for each page
export const PAGE_METADATA = {
  home: generateMetadata({
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
    openGraph: {
      description:
        'Якісний ремонт квартир під ключ у Тернополі. Косметичний та капітальний ремонт. Понад 10 років досвіду, 200+ завершених проєктів.',
    },
  }),

  about: generateMetadata({
    title: 'Про майстра | Ремонт Квартир',
    description:
      'Досвідчений майстер з ремонту квартир. Більше 10 років досвіду, понад 200 успішно завершених проєктів.',
    openGraph: {
      title: 'Володимир Батькович - Професійний майстер з ремонту квартир',
      description:
        'Понад 10 років досвіду, 200+ успішно завершених проєктів. Професійний ремонт квартир під ключ у Тернополі. Гарантія якості.',
      type: 'profile',
      imageAlt: 'Професійний майстер з ремонту Володимир Батькович',
    },
  }),

  services: generateMetadata({
    title: 'Послуги та Ціни | Ремонт Квартир',
    description:
      'Всі види ремонтних робіт: косметичний, капітальний ремонт, електрика, сантехніка, плиткові роботи. Прозорі ціни, гарантія якості.',
    openGraph: {
      title: 'Послуги з ремонту квартир - Ціни та Види Робіт',
      description:
        'Повний спектр ремонтних послуг у Тернополі: ремонт під ключ, косметичний та капітальний ремонт, електромонтажні та сантехнічні роботи. Прозорі ціни.',
    },
  }),

  portfolio: generateMetadata({
    title: 'Портфоліо Робіт | Ремонт Квартир',
    description:
      "Переглядайте приклади виконаних проєктів з ремонту квартир. Фото до та після ремонту. 200+ успішно завершених об'єктів.",
    openGraph: {
      title: 'Наші Роботи - Портфоліо Ремонту Квартир',
      description:
        'Більше 200 успішно завершених проєктів з ремонту квартир у Тернополі. Дивіться фото наших робіт до та після ремонту.',
    },
  }),

  contact: generateMetadata({
    title: 'Контакти | Ремонт Квартир',
    description:
      "Зв'яжіться з нами для безкоштовної консультації. Телефон, адреса, форма зворотного зв'язку. Швидка відповідь на ваші запити.",
    openGraph: {
      title: 'Контакти - Безкоштовна Консультація з Ремонту',
      description:
        "Зателефонуйте або напишіть нам для безкоштовної консультації з ремонту квартир. Швидка відповідь, виїзд на об'єкт у Тернополі.",
    },
  }),
} as const
