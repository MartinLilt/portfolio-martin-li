import {Rule} from '@sanity/types'

export default {
  name: 'myCurrentCv',
  type: 'document',
  title: 'My Current CV',
  description: 'My current CV',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'My current CV',
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
      name: 'uploadingCv',
      type: 'file',
      title: 'Uploading CV',
      description: 'My current CV',
    },
  ],
}
