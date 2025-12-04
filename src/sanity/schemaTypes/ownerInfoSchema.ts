import { defineType, defineField } from 'sanity'

export const ownerInfoSchema = defineType({
  name: 'ownerInfo',
  title: 'Owner Information',
  type: 'document',
  fields: [
    // Phone Information
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'object',
      description: 'Phone contact information',
      fields: [
        defineField({
          name: 'number',
          title: 'Phone Number',
          type: 'string',
          description: 'Raw phone number for tel: links (e.g., "+380000000001")',
          validation: Rule =>
            Rule.required()
              .regex(/^\+?\d+$/, {
                name: 'phone',
                invert: false,
              })
              .error('Must be a valid phone number'),
        }),
        defineField({
          name: 'display',
          title: 'Display Format',
          type: 'string',
          description: 'Formatted phone number for display (e.g., "+380 (00) 000-00-01")',
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required(),
    }),

    // Email
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Contact email address',
      validation: Rule => Rule.required().email(),
    }),

    // Social Media Links
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      description: 'Social media contact information',
      fields: [
        defineField({
          name: 'telegram',
          title: 'Telegram',
          type: 'string',
          description: 'Telegram username (without @)',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'viber',
          title: 'Viber',
          type: 'string',
          description: 'Viber phone number',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'string',
          description: 'WhatsApp phone number (international format without +)',
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      phone: 'phone.display',
      email: 'email',
    },
    prepare({ phone, email }) {
      return {
        title: 'Owner Information',
        subtitle: `${phone} | ${email}`,
      }
    },
  },
})
