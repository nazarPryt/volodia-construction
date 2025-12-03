import { defineType, defineField } from 'sanity'

export const homePageSchema = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      description: 'Main hero section at the top of the home page',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'Small badge text above the title (e.g., "Професійний ремонт")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          description: 'Main heading text (e.g., "Якісний ремонт квартир")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'highlightedText',
          title: 'Highlighted Title Part',
          type: 'string',
          description: 'Text to highlight with gradient (e.g., "під ключ")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Hero description paragraph',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'ctaPrimaryText',
          title: 'Primary Button Text',
          type: 'string',
          description: 'Text for main call-to-action button (e.g., "Замовити дзвінок")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'ctaSecondaryText',
          title: 'Secondary Button Text',
          type: 'string',
          description: 'Text for secondary button (e.g., "Дивитись роботи")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Benefits
    defineField({
      name: 'benefits',
      title: 'Benefits Statistics',
      type: 'array',
      description: 'Statistics displayed in hero section (e.g., "10+ Років досвіду")',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Numeric value or stat (e.g., "10+", "200+", "100%")',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Description text (e.g., "Років досвіду")',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),

    // Services Section Header
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      description: 'Header for the services section',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Наші послуги")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Section description',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text for "view all" button (e.g., "Всі послуги та ціни")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Services
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      description: 'List of services offered',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (Emoji)',
              type: 'string',
              description: 'Emoji icon for the service (e.g., "🏠", "🎨", "🔨")',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              description: 'Name of the service',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Brief description of the service',
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

    // Portfolio Section Header
    defineField({
      name: 'portfolioSection',
      title: 'Portfolio Section',
      type: 'object',
      description: 'Header for the portfolio preview section',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Наші роботи")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Section description',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text for "view all" button (e.g., "Дивитись всі роботи")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Features Section Header
    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',
      description: 'Header for "Why Choose Us" section',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main heading (e.g., "Чому обирають нас")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // Features
    defineField({
      name: 'features',
      title: 'Features / Why Choose Us',
      type: 'array',
      description: 'Reasons why customers should choose your service',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (Emoji)',
              type: 'string',
              description: 'Emoji icon (e.g., "✅", "⏱️", "💰")',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'Name of the feature/benefit',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Brief description',
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
          description: 'Main heading (e.g., "Готові почати ремонт?")',
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
          description: 'Text for main button (e.g., "📞 Зателефонувати зараз")',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          description: 'Text for secondary button (e.g., "Написати повідомлення")',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
