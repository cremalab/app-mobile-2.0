import "react-native-gesture-handler"
import { NODE_ENV, RENDER_STORYBOOK } from "@env"
import { registerRootComponent } from "expo"
import App from "./App"
import StorybookUI from "./storybook"

if (NODE_ENV !== "production") {
  console.log("Your current environment is", NODE_ENV)
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(RENDER_STORYBOOK === "true" ? StorybookUI : App)
