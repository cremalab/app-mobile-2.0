import { NavigationContainer, Theme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { setStatusBarStyle } from "expo-status-bar"
import { useTheme } from "native-base"
import { useEffect } from "react"
import { Platform } from "react-native"
import { ModalScreen } from "../screens"
import { RootStackParamList } from "../types/Navigation"
import DrawerNavigator from "./DrawerNavigator"
// Comment in TabNavigator - Be sure to delete or comment out DrawerNavigator import above
// import TabNavigator from "./TabNavigator"

export default function RootNavigator() {
  const { colors } = useTheme()

  console.log(colors.gray[900])

  useEffect(() => {
    Platform.OS === "ios"
      ? setStatusBarStyle("light")
      : setStatusBarStyle("dark")
  }, [])

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
        {/* Comment in TabNavigator - Be sure to delete or comment out DrawerNavigator */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={TabNavigator}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={DrawerNavigator}
        />
        {/* A Group for modals and overlays */}
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "modal",
          }}
        >
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
