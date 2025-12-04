import { FAQSection as FAQSectionType } from '@/sanity/types/contactPage'

interface FAQSectionProps {
  faqData: FAQSectionType
}

export default function FAQSection({ faqData }: FAQSectionProps) {
  return (
    <section className="w-full bg-blue-50 py-16 dark:bg-blue-950/20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-foreground mb-12 text-center text-3xl font-bold" data-aos="fade-up">
          Часті питання:
        </h2>
        <div className="mx-auto max-w-3xl space-y-6">
          {faqData.items.map((item, index) => (
            <div key={index} className="bg-background rounded-lg p-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-foreground mb-2 text-lg font-semibold">{item.question}</h3>
              <p className="text-foreground/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
