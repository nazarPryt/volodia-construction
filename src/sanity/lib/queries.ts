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
