import { defineQuery } from 'next-sanity'

// Home Page Query - Fetches all content for the home page
export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0] {
    hero {
      badge,
      title,
      highlightedText,
      description,
      ctaPrimaryText,
      ctaSecondaryText
    },
    benefits[] {
      value,
      label
    },
    servicesSection {
      title,
      description,
      buttonText
    },
    services[] {
      icon,
      title,
      description
    },
    portfolioSection {
      title,
      description,
      buttonText
    },
    featuresSection {
      title
    },
    features[] {
      icon,
      title,
      description
    },
    ctaSection {
      title,
      description,
      primaryButtonText,
      secondaryButtonText
    }
  }
`)

// About Page Query - Fetches all content for the about page
export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"][0] {
    pageHeader {
      title,
      description
    },
    qualificationsSection {
      title
    },
    qualifications[] {
      icon,
      title,
      description
    },
    principlesSection {
      title
    },
    principles[] {
      title,
      description
    },
    ctaSection {
      title,
      description,
      primaryButtonText,
      secondaryButtonText
    }
  }
`)

// Contact Page Query - Fetches FAQ section for the contact page
export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_type == "contactPage"][0] {
    faqSection {
      title,
      items[] {
        question,
        answer
      }
    }
  }
`)

// Owner Info Query - Fetches owner/business contact information
export const OWNER_INFO_QUERY = defineQuery(`
  *[_type == "ownerInfo"][0] {
    phone {
      number,
      display
    },
    email,
    social {
      telegram,
      viber,
      whatsapp
    }
  }
`)
