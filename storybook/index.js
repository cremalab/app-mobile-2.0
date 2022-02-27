import { withKnobs } from "@storybook/addon-knobs"
import {
  addDecorator,
  configure,
  getStorybookUI,
} from "@storybook/react-native"
import { NativeBaseProvider } from "native-base"
import React from "react"
import { AppRegistry } from "react-native"
import { customTheme } from "../src/theme"
import { loadStories } from "./storyLoader"
import "./rn-addons"

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({
  port: 7007,
  host: "localhost",
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  asyncStorage: require("@react-native-async-storage/async-storage").default,
})

const StorybookUIRoot = () => (
  <NativeBaseProvider theme={customTheme}>
    <StorybookUI />
  </NativeBaseProvider>
)

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
AppRegistry.registerComponent("Crema Mobile Starter", () => StorybookUIRoot)

export default StorybookUIRoot
