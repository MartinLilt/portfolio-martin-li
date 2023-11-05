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
    },
    {
      name: 'uploadingCv',
      type: 'url',
      title: 'Your Uploading CV',
      description: 'file',
    },
  ],
}
