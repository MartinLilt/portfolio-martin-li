import { Rule } from '@sanity/types';

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
      name: 'company',
      type: 'string',
      title: 'Company',
      description: 'Resume',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Resume',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'description',
    },
    {
      name: 'contract',
      type: 'object',
      title: 'Contract Type',
      description: 'logo',
      fields: [
        {
          name: 'contractLocation',
          type: 'string',
          title: 'Contract Location',
          description: 'description',
        },
        {
          name: 'contractType',
          type: 'string',
          title: 'Contract Type',
          description: 'description',
        },
      ]
    },
    {
      name: 'date',
      type: 'object',
      title: 'Date',
      description: 'Resume',
      fields: [
        {
          name: 'startDate',
          type: 'string',
          title: 'Start Date',
          description: 'Date and time when the post was published.',
        },
        {
          name: 'endDate',
          type: 'string',
          title: 'End Date',
          description: 'Date and time when the post was published.',
        },
      ],
    },
  ],
};
