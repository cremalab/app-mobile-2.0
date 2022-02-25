/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */

// Learn more about types and react-navigation: https://reactnavigation.org/docs/typescript/

import { CompositeScreenProps, NavigationProp } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"

export type RootStackParamList = {
  Main: undefined
  Modal: { message: string }
}

export type MainStackParamList = {
  Home: undefined
  Explore: undefined
  Profile: undefined
  Settings: undefined
}

export type RootNavigationProp = NavigationProp<RootStackParamList>

export type RootScreenProp<Screen extends keyof RootStackParamList = "Main"> =
  StackScreenProps<RootStackParamList, Screen>

export type MainStackScreenProp<Screen extends keyof MainStackParamList> =
  CompositeScreenProps<
    StackScreenProps<MainStackParamList, Screen>,
    RootScreenProp<keyof RootStackParamList>
  >

// Specifying default types for useNavigation, Link, ref etc: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
