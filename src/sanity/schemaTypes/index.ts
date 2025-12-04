import { type SchemaTypeDefinition } from 'sanity'
import { homePageSchema } from './homePageSchema'
import { aboutPageSchema } from './aboutPageSchema'
import { contactPageSchema } from './contactPageSchema'
import { ownerInfoSchema } from './ownerInfoSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSchema, aboutPageSchema, contactPageSchema, ownerInfoSchema],
}
