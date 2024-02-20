import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'flow',
  title: 'In Progress Flows',
  type: 'document',
  fields: [
    defineField({
      name: 'projectId',
      title: 'Project Id',
      type: 'string',
    }),
    defineField({
      name: 'completedSteps',
      title: 'Completed Steps',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'stepTemplate'}]}],
    }),
    defineField({
      name: 'flowTemplate',
      type: 'reference',
      to: [{type: 'flowTemplate'}],
    }),
  ],
})
