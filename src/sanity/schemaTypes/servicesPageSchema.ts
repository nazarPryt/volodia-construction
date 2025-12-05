import { defineType, defineField } from 'sanity'

export const servicesPageSchema = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // Services
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      description: 'List of all services offered',
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
              description: 'Detailed description of the service',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'details',
              title: 'Service Details',
              type: 'array',
              description: "List of what's included in this service (5-6 items recommended)",
              of: [{ type: 'string' }],
              validation: Rule => Rule.required().min(3).max(10),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'Price text (e.g., "від 5000 грн/м²", "від 800 грн/шт")',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'price',
              icon: 'icon',
            },
            prepare({ title, subtitle, icon }) {
              return {
                title: `${icon} ${title}`,
                subtitle: subtitle,
              }
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1).warning('Consider adding 6-12 services for a balanced display'),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Services Page',
      }
    },
  },
})
