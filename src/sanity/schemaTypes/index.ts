import { type SchemaTypeDefinition } from 'sanity'
import { homePageSchema } from './homePageSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSchema],
}
