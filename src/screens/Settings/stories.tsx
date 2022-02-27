import { storiesOf } from "@storybook/react-native"
import React from "react"
import { MockNavigator } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import SettingScreen from "."

storiesOf("SettingScreen", module).add("default", () => (
  <MockNavigator<MainStackParamList>
    component={SettingScreen}
    name="Settings"
  />
))
