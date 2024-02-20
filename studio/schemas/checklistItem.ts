import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'checklistItem',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
