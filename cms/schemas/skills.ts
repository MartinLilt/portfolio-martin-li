export default {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  description: 'Description',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Description',
    },
    {
      name: 'icon',
      type: 'object',
      title: 'Title',
      description: 'Description',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
          description: 'Description',
        },
        {
          name: 'alert',
          type: 'string',
          title: 'Alert',
          description: 'Description',
        },
      ],
    },
    {
      name: 'progress',
      type: 'number',
      title: 'Progress',
      description: 'Description',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Description',
      of: [
        {
          name: 'tag',
          type: 'string',
          title: 'Tag',
          description: 'Description',
        },
      ],
    },
  ],
}
