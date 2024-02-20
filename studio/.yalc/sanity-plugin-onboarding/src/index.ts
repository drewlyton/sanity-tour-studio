import {definePlugin} from 'sanity'
import {CustomLayout, CustomNavBar} from './CustomLayout'
import {onboardingTool} from './OnboardingTool'

interface MyPluginConfig {
  /* nothing here yet */
}

export const myPlugin = definePlugin<MyPluginConfig | void>((config = {}) => {
  return {
    name: 'sanity-plugin-onboarding',
    tools: [onboardingTool()],
    studio: {
      components: {
        layout: CustomLayout,
        navbar: CustomNavBar,
      },
    },
  }
})
