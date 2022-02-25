import { Center, Text } from "native-base"
import { RootScreenProp } from "../../types/Navigation"

export default function ModalScreen(props: RootScreenProp<"Modal">) {
  // params example
  const {
    name,
    params: { message },
  } = props.route

  return (
    <Center safeArea flex="1">
      <Text variant="title3" color="primary.300">
        {name}
      </Text>
      <Text pt="3" color="white">
        {message}
      </Text>
    </Center>
  )
}
