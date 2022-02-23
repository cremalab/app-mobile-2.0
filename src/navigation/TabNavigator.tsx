import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { TabParamList } from "../types/Navigation"

export default function TabNavigator() {
  const Tab = createBottomTabNavigator<TabParamList>()
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={View} />
      <Tab.Screen name="Explore" component={View} />
      <Tab.Screen name="Profile" component={View} />
      <Tab.Screen name="Settings" component={View} />
    </Tab.Navigator>
  )
}
