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
      type: 'string',
      title: 'Name',
      description: 'Description',
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
