// TypeScript types for About Page content from Sanity CMS

export interface PageHeader {
  title: string
  description: string
}

export interface Qualification {
  icon: string
  title: string
  description: string
}

export interface Principle {
  title: string
  description: string
}

export interface CTASection {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

export interface SectionTitle {
  title: string
}

export interface AboutPageData {
  pageHeader: PageHeader
  qualificationsSection: SectionTitle
  qualifications: Qualification[]
  principlesSection: SectionTitle
  principles: Principle[]
  ctaSection: CTASection
}
