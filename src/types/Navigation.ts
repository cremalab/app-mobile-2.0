import { NavigationProp, RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
  Main: undefined
  Modal: { message: string }
}

export type TabParamList = {
  Home: undefined
  Explore: undefined
  Profile: undefined
  Settings: undefined
}

export type TabNavigationProp = NavigationProp<TabParamList>

export type RootNavigationProp = NavigationProp<RootStackParamList>

export type RootScreenProp<Screen extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  Screen
>
