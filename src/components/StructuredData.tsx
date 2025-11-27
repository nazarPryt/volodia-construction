import { CONTACT_INFO } from '@/config/contacts'
import { SITE_CONFIG } from '@/config/metadata'

interface StructuredDataProps {
  type?: 'home' | 'about' | 'services' | 'portfolio' | 'contact'
}

export default function StructuredData({ type = 'home' }: StructuredDataProps) {
  const baseUrl = SITE_CONFIG.url

  // Organization Schema - show on all pages
  const organizationSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: 'Ремонт Квартир Тернопіль',
    description: 'Професійний ремонт квартир під ключ у Тернополі',
    url: baseUrl,
    telephone: CONTACT_INFO.PHONE.NUMBER,
    email: CONTACT_INFO.EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Тернопіль',
      addressRegion: 'Тернопільська область',
      addressCountry: 'UA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.5535,
      longitude: 25.5948,
    },
    areaServed: {
      '@type': 'City',
      name: 'Тернопіль',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [`https://t.me/${CONTACT_INFO.SOCIAL.TELEGRAM}`, `https://wa.me/${CONTACT_INFO.SOCIAL.WHATSAPP}`],
  }

  // Person Schema for About page
  const personSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Володимир Батькович',
    jobTitle: 'Професійний Майстер з ремонту квартир',
    worksFor: {
      '@id': `${baseUrl}#organization`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Тернопіль',
      addressCountry: 'UA',
    },
    telephone: CONTACT_INFO.PHONE.NUMBER,
    email: CONTACT_INFO.EMAIL,
  }

  // Service Schema for Services page
  const servicesSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Ремонт квартир',
    provider: {
      '@id': `${baseUrl}#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Тернопіль',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Послуги з ремонту',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ремонт під ключ',
            description: 'Повний цикл ремонтних робіт від демонтажу до фінішного оздоблення',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Косметичний ремонт',
            description: 'Швидке оновлення інтерєру: фарбування, шпалери, підлоги',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Капітальний ремонт',
            description: 'Повна реконструкція приміщення з заміною комунікацій',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Електромонтажні роботи',
            description: 'Монтаж електропроводки, розетки, світильники',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Сантехнічні роботи',
            description: 'Заміна труб, установка сантехнічного обладнання',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Плиткові роботи',
            description: 'Укладання керамічної плитки, керамограніту, мозаїки',
          },
        },
      ],
    },
  }

  // Website Schema for головної page
  const websiteSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    url: baseUrl,
    name: 'Ремонт Квартир Тернопіль',
    description: 'Професійний ремонт квартир під ключ у Тернополі',
    publisher: {
      '@id': `${baseUrl}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // BreadcrumbList Schema
  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Головна',
        item: baseUrl,
      },
    ],
  }

  // Choose which diagrams to display depending on the current page
  const getSchemas = () => {
    const schemas = [organizationSchema]

    switch (type) {
      case 'home':
        schemas.push(websiteSchema, breadcrumbSchema)
        break
      case 'about':
        schemas.push(personSchema)
        break
      case 'services':
        schemas.push(servicesSchema)
        break
      default:
        break
    }

    return schemas
  }

  const schemas = getSchemas()

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\u003c'),
          }}
        />
      ))}
    </>
  )
}
