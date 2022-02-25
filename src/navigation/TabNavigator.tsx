import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, useTheme } from "native-base"
import { FeatherIcon } from "../components"
import { FeatherIconName } from "../components/FeatherIcon"
import {
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens"
import { MainStackParamList } from "../types/Navigation"

export default function TabNavigator() {
  const { space } = useTheme()

  const Tab = createBottomTabNavigator<MainStackParamList>()

  const tabIconMap: { [key in keyof MainStackParamList]: FeatherIconName } = {
    Home: "home",
    Explore: "search",
    Profile: "user",
    Settings: "settings",
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          paddingTop: space[1],
        },
        tabBarLabel: ({ color }) => <Text color={color}>{route.name}</Text>,
        tabBarIcon: ({ color }) => (
          <FeatherIcon name={tabIconMap[route.name]} size="8" color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
