import {HomeIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Text} from '@sanity/ui'
import {Provider, atom, useAtom} from 'jotai'
import {LayoutProps, NavbarProps} from 'sanity'
import useLocation from './useLocation'

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-onboarding'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */

const showPanel = atom(false)

export function RightSidePanel() {
  const [state] = useAtom(showPanel)
  const currentPath = useLocation()
  console.log({currentPath})
  const isVision = currentPath === '/vision'
  if (state)
    return (
      <Card padding={[3, 3, 4]} radius={2} shadow={1} tone="primary">
        <Text size={4} style={{paddingBottom: '3em'}}>
          Get Started
        </Text>
        {isVision ? <Text>Some info about Vision </Text> : <Text>This is a right sidebar. </Text>}
      </Card>
    )
}

export function CustomLayout(props: LayoutProps) {
  return (
    <Provider>
      <Flex height={'fill'}>
        <Box flex={1}>{props.renderDefault(props)}</Box>
        <RightSidePanel />
      </Flex>
    </Provider>
  )
}

export function CustomNavBar(props: NavbarProps) {
  const [state, setState] = useAtom(showPanel)

  const togglePanel = () => {
    setState(!state)
  }
  return (
    <Flex align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Card scheme="dark" paddingRight={2}>
        <Button icon={HomeIcon} onClick={togglePanel} />
      </Card>
    </Flex>
  )
}
