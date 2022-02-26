import { useHeaderHeight } from "@react-navigation/elements"
import { Button, Center, Text } from "native-base"
import { MainStackScreenProp } from "../../types/Navigation"

export default function HomeScreen(props: MainStackScreenProp<"Home">) {
  const headerHeight = useHeaderHeight()

  const {
    route: { name },
    navigation: { navigate },
  } = props

  const handleOpenModal = () => {
    // navigating and passing params
    navigate("Modal", { message: "Hello World" })
  }

  return (
    <Center mb={headerHeight} safeArea flex="1">
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
    </Center>
  )
}
