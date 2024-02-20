import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myPlugin} from 'sanity-plugin-onboarding'

export default defineConfig({
  name: 'default',
  title: 'sanity-tour',

  projectId: '76wb6ddc',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), myPlugin()],

  schema: {
    types: schemaTypes,
  },
})
