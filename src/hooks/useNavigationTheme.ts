import { Theme } from "@react-navigation/native"
import { useTheme } from "native-base"

export default function useNavigationTheme() {
  const { colors } = useTheme()

  const navigationTheme: Theme = {
    colors: {
      background: colors.gray[900],
      border: colors.gray[800],
      card: colors.gray[700],
      notification: colors.danger[300],
      primary: colors.primary[300],
      text: colors.white,
    },
    dark: true,
  }

  return { navigationTheme }
}
