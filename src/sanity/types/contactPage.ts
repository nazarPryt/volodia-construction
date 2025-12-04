// TypeScript types for Contact Page content from Sanity CMS

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSection {
  title: string
  items: FAQItem[]
}

export interface ContactPageData {
  faqSection: FAQSection
}
