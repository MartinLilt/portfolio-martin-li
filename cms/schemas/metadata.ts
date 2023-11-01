// schemas/metadata.js

export default {
    name: 'metadata',
    type: 'document',
    title: 'Metadata',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'The title of the content (e.g., webpage title).',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'A brief description of the content.',
      },
      {
        name: 'author',
        type: 'object', // You can use "object" type for author information
        title: 'Author',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          // Add other fields related to the author
        ],
        description: 'The author of the content.',
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'Keywords',
        of: [{ type: 'string' }],
        description: 'Keywords or tags related to the content.',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: 'An image associated with the content.',
      },
    ],
  };
  