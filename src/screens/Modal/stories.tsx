import { storiesOf } from "@storybook/react-native"
import React from "react"
import { MockNavigator } from "test-utils"
import { RootStackParamList } from "../../types/Navigation"
import ModalScreen from "."

storiesOf("ModalScreen", module).add("default", () => (
  <MockNavigator<RootStackParamList>
    component={ModalScreen}
    name="Modal"
    params={{ message: "Hello World!" }}
  />
))
