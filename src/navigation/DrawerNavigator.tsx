import { createDrawerNavigator } from "@react-navigation/drawer"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { Pressable, Text, useTheme } from "native-base"
import { FeatherIcon } from "../components"
import { FeatherIconName } from "../components/FeatherIcon"
import {
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens"
import { MainStackParamList } from "../types/Navigation"

const Drawer = createDrawerNavigator<MainStackParamList>()

export default function DrawerNavigator() {
  const { colors, space } = useTheme()

  const { dispatch } = useNavigation()

  const drawerIconMap: { [key in keyof MainStackParamList]: FeatherIconName } =
    {
      Home: "home",
      Explore: "search",
      Profile: "user",
      Settings: "settings",
    }

  const handleOpenDrawer = () => {
    dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.gray["900"],
          shadowColor: "transparent",
        },
        headerLeft: () => (
          <Pressable onPress={handleOpenDrawer}>
            <FeatherIcon color="primary.700" name="menu" ml="6" />
          </Pressable>
        ),
        title: "",
        drawerIcon: ({ color }) => (
          <FeatherIcon
            size="6"
            color={color}
            name={drawerIconMap[route.name]}
          />
        ),
        drawerStyle: {
          paddingTop: space["8"],
        },
        drawerLabel: ({ color }) => <Text color={color}>{route.name}</Text>,
        drawerItemStyle: {
          backgroundColor: "transparent",
          paddingVertical: space["1"],
          paddingLeft: space["3"],
        },
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Explore" component={ExploreScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}
