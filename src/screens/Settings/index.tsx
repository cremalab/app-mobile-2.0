import { useHeaderHeight } from "@react-navigation/elements"
import { Center, Text } from "native-base"
import { MainStackScreenProp } from "../../types/Navigation"

export default function SettingsScreen(props: MainStackScreenProp<"Settings">) {
  const { name } = props.route

  const headerHeight = useHeaderHeight()

  return (
    <Center mb={headerHeight} safeArea flex="1">
      <Text variant="title3" color="primary.300">
        {name}
      </Text>
    </Center>
  )
}
