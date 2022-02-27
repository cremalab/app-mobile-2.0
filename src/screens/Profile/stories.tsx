import { storiesOf } from "@storybook/react-native"
import React from "react"
import { MockNavigator } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import ProfileScreen from "."

storiesOf("ProfileScreen", module).add("default", () => (
  <MockNavigator<MainStackParamList> component={ProfileScreen} name="Profile" />
))
