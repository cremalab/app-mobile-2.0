import { useRoute } from "@react-navigation/native"
import { Box, Text } from "native-base"

export default function SettingsScreen() {
  const { name } = useRoute()

  return (
    <Box safeArea justifyContent="center" alignItems="center" flex="1">
      <Text variant="title3" color="primary.300">
        {name}
      </Text>
    </Box>
  )
}
