import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParamList } from "../types/Navigation"
import TabNavigator from "./TabNavigator"

export default function RootNavigator() {
  const Stack = createStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
