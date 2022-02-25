import { useHeaderHeight } from "@react-navigation/elements"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Box, Button, Text } from "native-base"
import CremaLogo from "../../assets/CremaLogo.svg"
import { RootNavigationProp } from "../../types/Navigation"

export default function HomeScreen() {
  const { navigate } = useNavigation<RootNavigationProp>()

  const headerHeight = useHeaderHeight()

  const { name } = useRoute()

  const handleOpenModal = () => {
    // navigating and passing params
    navigate("Modal", { message: "Hello World" })
  }

  return (
    <Box
      safeArea
      justifyContent="center"
      alignItems="center"
      flex="1"
      mx="6"
      mb={headerHeight}
    >
      <Box position="absolute" top="24">
        <CremaLogo />
      </Box>
      <Text mb="8" variant="title3" color="primary.300">
        {name}
      </Text>
      <Text maxW="2/3" textAlign="center" color="white">
        This is the home screen. Open up your text editor and replace this text
        to start creating your first app!
      </Text>
      <Button mt="8" onPress={handleOpenModal}>
        Open Modal
      </Button>
    </Box>
  )
}
