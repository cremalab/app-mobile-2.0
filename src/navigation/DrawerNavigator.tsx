import { createDrawerNavigator } from "@react-navigation/drawer"
import {
  DrawerActions,
  useNavigation,
  useTheme,
} from "@react-navigation/native"
import { Pressable, Text } from "native-base"
import { FeatherIcon } from "../components"
import { FeatherIconName } from "../components/FeatherIcon"
import {
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens"
import { DrawerParamList } from "../types/Navigation"

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function DrawerNavigator() {
  const { colors } = useTheme()

  const { dispatch } = useNavigation()

  const drawerIconMap: { [key in keyof DrawerParamList]: FeatherIconName } = {
    Home: "home",
    Explore: "search",
    Profile: "user",
    Settings: "settings",
  }

  const handleOpenDrawer = () => {
    dispatch(DrawerActions.openDrawer())
  }

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.background,
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
        drawerLabel: ({ color }) => <Text color={color}>{route.name}</Text>,
        drawerItemStyle: {
          backgroundColor: "transparent",
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