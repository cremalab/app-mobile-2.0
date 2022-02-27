import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { setStatusBarStyle } from "expo-status-bar"
import { useEffect } from "react"
import { Platform } from "react-native"
import { useNavigationTheme } from "../hooks"
import { ModalScreen } from "../screens"
import { RootStackParamList } from "../types/Navigation"
// Comment in DrawerNavigator - Be sure to delete or comment out TabNavigator import below
// import DrawerNavigator from "./DrawerNavigator"
import TabNavigator from "./TabNavigator"

export default function RootNavigator() {
  const { navigationTheme } = useNavigationTheme()

  useEffect(() => {
    Platform.OS === "ios"
      ? setStatusBarStyle("light")
      : setStatusBarStyle("dark")
  }, [])

  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={TabNavigator}
        />
        {/* Comment in DrawerNavigator - Be sure to delete or comment out TabNavigator */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={DrawerNavigator}
        /> */}
        {/* A Group for modals and overlays */}
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "modal",
            gestureEnabled: true,
          }}
        >
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
