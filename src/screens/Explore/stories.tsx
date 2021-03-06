import { storiesOf } from "@storybook/react-native"
import React from "react"
import { MockNavigator } from "test-utils"
import { MainStackParamList } from "../../types/Navigation"
import ExploreScreen from "."

storiesOf("ExploreScreen", module).add("default", () => (
  <MockNavigator<MainStackParamList> component={ExploreScreen} name="Explore" />
))
