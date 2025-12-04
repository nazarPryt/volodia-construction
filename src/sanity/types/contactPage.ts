// TypeScript types for Contact Page content from Sanity CMS

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSection {
  items: FAQItem[]
}

export interface ContactPageData {
  faqSection: FAQSection
}
