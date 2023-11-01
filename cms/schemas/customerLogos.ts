import {Rule} from '@sanity/types'

export default {
  name: 'customerLogos',
  type: 'document',
  title: 'Customer Logos',
  description: 'Social Media',
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
      name: 'icons',
      type: 'array',
      title: 'Social Media Icons',
      of: [
        {
          type: 'object',
          name: 'socialIcon',
          fields: [
            {
              name: 'customerLink',
              type: 'url',
              title: 'Icon Name',
              description: 'Name of the social media icon',
            },
            {
              name: 'customerAlert',
              type: 'string',
              title: 'Icon Reference',
              description: 'Reference to the icon',
            },
            {
              name: 'customerLogo',
              type: 'file',
              title: 'Logo file',
              description: 'Reference to the icon',
            },
          ],
        },
      ],
    },
  ],
}
