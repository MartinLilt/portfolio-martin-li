import {Rule} from '@sanity/types'

export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
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
      name: 'casepath',
      type: 'string',
      title: 'Case path',
      description: 'Path of case.',
      validation: (Rule: Rule) => {
        Rule.required()
          .min(5)
          .warning('Title should be at least 5 characters')
          .max(100)
          .warning('Title should be no longer than 100 characters')
      },
    },
    {
      name: 'casetags',
      type: 'array',
      title: 'Case tags',
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
      name: 'casePreview',
      type: 'object',
      title: 'Case Preview',
      fields: [
        {
          name: 'suptitle',
          type: 'string',
          title: 'Suptitle of preview',
          description: 'You need to fill your main content',
          validation: (Rule: Rule) => {
            Rule.required()
              .min(5)
              .warning('Title should be at least 5 characters')
              .max(100)
              .warning('Title should be no longer than 100 characters')
          },
        },
        {
          name: 'desc',
          type: 'string',
          title: 'Description of preview',
          description: 'You need to fill your main content',
          validation: (Rule: Rule) => {
            Rule.required()
              .min(5)
              .warning('Title should be at least 5 characters')
              .max(100)
              .warning('Title should be no longer than 100 characters')
          },
        },
        {
          name: 'image',
          type: 'image',
          title: 'Main image',
          description: 'Download main image of the case.',
          validation: (Rule: Rule) =>
            Rule.required().length(1).warning('You can only have one main image'),
        },
      ],
    },
    {
      name: 'caseMainContent',
      type: 'object',
      title: 'Case Main Content',
      description: 'You need to fill your main content',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'Title of the post.',
          validation: (Rule: Rule) => {
            Rule.required()
              .min(5)
              .warning('Title should be at least 5 characters')
              .max(100)
              .warning('Title should be no longer than 100 characters')
          },
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [{type: 'block'}],
          description: 'Structured and styled content of the post.',
          validation: (Rule: Rule) => {
            Rule.required()
              .min(5)
              .warning('Title should be at least 5 characters')
              .max(100)
              .warning('Title should be no longer than 100 characters')
          },
        },
        {
          name: 'publishedAt',
          type: 'datetime',
          title: 'Published At',
          description: 'Date and time when the post was published.',
          validation: (Rule: Rule) =>
            Rule.required().custom((publishedAt: string) => {
              if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(publishedAt)) {
                return 'Invalid date format. It should be in the format "YYYY-MM-DDTHH:MM:SSZ".'
              }
              return true // Date format is correct
            }),
        },
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [{type: 'image'}],
          description: 'Images related to the content.',
          validation: (Rule: Rule) => {
            Rule.required().min(3).warning('You must have at least 3 images.')
          },
        },
        {
          name: 'customerComment',
          type: 'text',
          title: 'Customer Comment',
          description: 'Customer comment related to the content.',
          validation: (Rule: Rule) => {
            Rule.required()
              .min(5)
              .warning('Title should be at least 5 characters')
              .max(100)
              .warning('Title should be no longer than 100 characters')
          },
        },
        {
          name: 'customerRanked',
          type: 'number',
          title: 'Customer Ranked',
          description: 'Customer ranking related to the content.',
          validation: (Rule: Rule) => {
            Rule.required()
              .min(5)
              .warning('Title should be at least 5 characters')
              .max(100)
              .warning('Title should be no longer than 100 characters')
          },
        },
        {
          name: 'customerVideoComment',
          type: 'file',
          title: 'Customer Video Comment',
          description: 'Customer video comment related to the content.',
        },
      ],
    },
  ],
}
