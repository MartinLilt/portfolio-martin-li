import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'martinli',

  projectId: 'sebt9i0k',
  dataset: 'limihub',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
