import { defineType, defineField } from 'sanity'

export const aboutPageSchema = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Page Header
    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      description: 'Main page header section',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Page title (e.g., "Про нас")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Page description/subtitle',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Qualifications Section Header
    defineField({
      name: 'qualificationsSection',
      title: 'Qualifications Section',
      type: 'object',
      description: 'Section header for qualifications',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Кваліфікація та навички")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Qualifications
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      description: 'List of qualifications and skills',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (Emoji)',
              type: 'string',
              description: 'Emoji icon (e.g., "🔧", "📋", "🛠️")',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Qualification Title',
              type: 'string',
              description: 'Name of the qualification',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Detailed description',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'icon',
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),

    // Work Principles Section Header
    defineField({
      name: 'principlesSection',
      title: 'Work Principles Section',
      type: 'object',
      description: 'Section header for work principles',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Мої принципи роботи")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Work Principles
    defineField({
      name: 'principles',
      title: 'Work Principles',
      type: 'array',
      description: 'List of work principles (numbers auto-generated from order)',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Principle Title',
              type: 'string',
              description: 'Name of the principle',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Detailed description',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),

    // CTA Section
    defineField({
      name: 'ctaSection',
      title: 'Call-to-Action Section',
      type: 'object',
      description: 'Final CTA section with blue background',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Готові почати співпрацю?")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'CTA description text',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
          description: 'Text for main button (e.g., "📞 Зателефонувати")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          description: 'Text for secondary button (e.g., "Переглянути роботи")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
})
