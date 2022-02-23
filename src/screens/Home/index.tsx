import { useNavigation, useRoute } from "@react-navigation/native"
import { Box, Button, Text } from "native-base"
import { RootNavigationProp } from "../../types/Navigation"

export default function HomeScreen() {
  const { navigate } = useNavigation<RootNavigationProp>()

  const { name } = useRoute()

  const handleOpenPress = () => {
    // navigating and passing params
    navigate("Modal", { message: "Hello World" })
  }

  return (
    <Box safeArea justifyContent="center" alignItems="center" flex="1" mx="6">
      <Text mb="8" variant="title3" color="primary.300">
        {name}
      </Text>
      <Text maxW="2/3" textAlign="center" color="white">
        This is the home screen. Open up your text editor and replace this text
        to start creating your first app!
      </Text>
      <Button mt="8" onPress={handleOpenPress}>
        Open Modal
      </Button>
    </Box>
  )
}
