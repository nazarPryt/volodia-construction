import { defineType, defineField } from 'sanity'

export const contactPageSchema = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  description: 'FAQ section for the contact page',
  fields: [
    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      description: 'Frequently Asked Questions section',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Часті питання")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
          description: 'List of questions and answers',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                  description: 'The question',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  description: 'The answer',
                  validation: Rule => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  question: 'question',
                },
                prepare({ question }) {
                  return {
                    title: question,
                  }
                },
              },
            },
          ],
          validation: Rule => Rule.required().min(1),
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Contact Page (FAQ)',
      }
    },
  },
})
