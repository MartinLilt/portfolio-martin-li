import {Rule} from '@sanity/types'

export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of case.',
      validation: (Rule: Rule) => {
        Rule.required()
          .min(5)
          .warning('Title should be at least 5 characters')
          .max(100)
          .warning('Title should be no longer than 100 characters')
      },
    },
    {
      name: 'link',
      type: 'object',
      title: 'Links',
      description: 'Service link',
      fields: [
        {
          name: 'href',
          type: 'string',
          title: 'Service URL',
          description: 'Service URL',
        },
        {
          name: 'alert',
          type: 'string',
          title: 'Alert URL',
          description: 'Alert URL',
        },
      ],
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'description',
      validation: (Rule: Rule) => {
        Rule.required()
          .min(5)
          .warning('Description should be at least 5 characters')
          .max(100)
          .warning('Description should be no longer than 100 characters')
      },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      description: 'Case tags related to the content.',
      validation: (Rule: Rule) => {
        Rule.required()
          .min(3)
          .warning('You must have at least 3 tags')
          .max(10)
          .warning('You cannot have more than 10 tags')
      },
    },
    {
      name: 'object3DFile',
      type: 'file',
      title: '3D Object File',
      description: 'Upload a 3D object file.',
      validation: (Rule: Rule) =>
        Rule.required().custom((file: {asset?: Record<string, unknown>}) => {
          if (!file || !file.asset) {
            return 'Please upload a 3D object file.'
          }
          return true
        }),
    },
  ],
}
