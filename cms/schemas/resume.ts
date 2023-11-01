import {Rule} from '@sanity/types'

export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  description: 'Resume',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Resume',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'description',
    },
    {
      name: 'logo',
      type: 'string',
      title: 'Logo',
      description: 'logo',
    },
    {
      name: 'date',
      type: 'object',
      title: 'Date',
      description: 'Resume',
      fields: [
        {
          name: 'startDate',
          type: 'datetime',
          title: 'Start Date',
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
          name: 'endDate',
          type: 'datetime',
          title: 'End Date',
          description: 'Date and time when the post was published.',
          validation: (Rule: Rule) =>
            Rule.required().custom((publishedAt: string) => {
              if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(publishedAt)) {
                return 'Invalid date format. It should be in the format "YYYY-MM-DDTHH:MM:SSZ".'
              }
              return true // Date format is correct
            }),
        },
      ],
    },
  ],
}
