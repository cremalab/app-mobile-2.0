import { NavigationProp } from "@react-navigation/native"

export type RootStackParamList = {
  Main: undefined
}

export type TabParamList = {
  Home: undefined
  Explore: undefined
  Profile: undefined
  Settings: undefined
}

export type TabNavigationProp = NavigationProp<TabParamList>

export type RootNavigationProp = NavigationProp<RootStackParamList>
