import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'flowTemplate',
  title: 'Flow',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'The unique key for the step',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'stepTemplates',
      title: 'Steps',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'stepTemplate'}]}],
    }),
  ],
})
