import { storiesOf } from "@storybook/react-native"
import React from "react"
import { MockNavigator } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import HomeScreen from "."

storiesOf("HomeScreen", module).add("default", () => (
  <MockNavigator<MainStackParamList> component={HomeScreen} name="Home" />
))
