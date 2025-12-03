// TypeScript types for Home Page content from Sanity CMS

export interface HeroSection {
  badge: string
  title: string
  highlightedText: string
  description: string
  ctaPrimaryText: string
  ctaSecondaryText: string
}

export interface Benefit {
  value: string
  label: string
}

export interface Section {
  title: string
  description: string
}

export interface SectionWithButton extends Section {
  buttonText: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface CTASection {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

export interface HomePageData {
  hero: HeroSection
  benefits: Benefit[]
  servicesSection: SectionWithButton
  services: Service[]
  portfolioSection: SectionWithButton
  featuresSection: {
    title: string
  }
  features: Feature[]
  ctaSection: CTASection
}
