import {Rule} from '@sanity/types'

export default {
  name: 'customerLogos',
  type: 'document',
  title: 'Customer Logos',
  description: 'Social Media',
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
}
