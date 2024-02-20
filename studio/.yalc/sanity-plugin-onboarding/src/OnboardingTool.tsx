import {Card, Grid, Text} from '@sanity/ui'

const MyCoolComponent = () => {
  return (
    <Grid columns={3} gap={4} padding={4}>
      <Card padding={4} tone="positive">
        <Text>Update your Schema.</Text>
      </Card>
      <Card padding={4} tone="critical">
        <Text>Query with GROQ.</Text>
      </Card>
      <Card padding={4} tone="primary">
        <Text>Invite a Collaborator.</Text>
      </Card>
    </Grid>
  )
}

export const onboardingTool = (config?: any) => ({
  name: 'onboarding-tool',
  title: 'Get Started',
  component: MyCoolComponent,
  ...config,
})
