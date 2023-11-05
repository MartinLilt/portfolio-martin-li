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
    },
    {
      name: 'isHomePage',
      type: 'boolean',
      title: 'Is Home Page',
      description: 'Title of case.',
    },
    {
      name: 'casepath',
      type: 'string',
      title: 'Case path',
      description: 'Path of case.',
    },
    {
      name: 'casetags',
      type: 'array',
      title: 'Case tags',
      of: [{type: 'string'}],
      description: 'Case tags related to the content.',
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
        },
        {
          name: 'desc',
          type: 'text',
          title: 'Description of preview',
          description: 'You need to fill your main content',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Main image',
          description: 'Download main image of the case.',
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
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [{type: 'block'}],
          description: 'Structured and styled content of the post.',
        },
        {
          name: 'publishedAt',
          type: 'datetime',
          title: 'Published At',
          description: 'Date and time when the post was published.',
        },
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [{type: 'image'}],
        },
        {
          name: 'customerComment',
          type: 'text',
          title: 'Customer Comment',
          description: 'Customer comment related to the content.',
        },
        {
          name: 'customerRanked',
          type: 'number',
          title: 'Customer Ranked',
          description: 'Customer ranking related to the content.',
        },
        {
          name: 'customerBusiness',
          type: 'string',
          title: 'Customer Business',
          description: 'Customer video comment related to the content.',
        },
        {
          name: 'customerAvatar',
          type: 'image',
          title: 'Customer Avatar',
          description: 'Customer video comment related to the content.',
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
