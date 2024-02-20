import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stepTemplate',
  title: 'Step',
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
      name: 'conditionalStep',
      title: 'Requires Completion Of...',
      description:
        'Optional field for requiring a previous Step before this one can be made active',
      type: 'reference',
      to: [{type: 'stepTemplate'}],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'checklistItem'}]}],
    }),
  ],
})
