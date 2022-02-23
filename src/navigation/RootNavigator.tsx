import { NavigationContainer, Theme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { setStatusBarStyle } from "expo-status-bar"
import { useTheme } from "native-base"
import { useEffect } from "react"
import { RootStackParamList } from "../types/Navigation"
import TabNavigator from "./TabNavigator"

export default function RootNavigator() {
  const { colors } = useTheme()

  useEffect(() => {
    setStatusBarStyle("light")
  })

  const Stack = createStackNavigator<RootStackParamList>()

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

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
