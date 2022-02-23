import { useRoute } from "@react-navigation/native"
import { Box, Text } from "native-base"
import { RootScreenProp } from "../../types/Navigation"

export default function ModalScreen() {
  // params example
  const { name, params } = useRoute<RootScreenProp<"Modal">>()
  const { message } = params

  return (
    <Box safeArea justifyContent="center" alignItems="center" flex="1">
      <Text variant="title3" color="primary.300">
        {name}
      </Text>
      <Text pt="3" color="white">
        {message}
      </Text>
    </Box>
  )
}
