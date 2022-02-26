import { Feather } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, useTheme } from "native-base"
import {
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens"
import { MainStackParamList } from "../types/Navigation"

type FeatherIconName = keyof typeof Feather["glyphMap"]

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
        tabBarItemStyle: {
          paddingTop: space[1],
        },
        tabBarLabel: ({ color }) => (
          <Text variant="tiny" color={color}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ color }) => (
          <Feather name={tabIconMap[route.name]} size={20} color={color} />
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
