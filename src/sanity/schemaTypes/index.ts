import { type SchemaTypeDefinition } from 'sanity'
import { homePageSchema } from './homePageSchema'
import { aboutPageSchema } from './aboutPageSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSchema, aboutPageSchema],
}
