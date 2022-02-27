import "react-native-gesture-handler"
import { RENDER_STORYBOOK } from "@env"
import { registerRootComponent } from "expo"
import App from "./App"
import StorybookUI from "./storybook"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(RENDER_STORYBOOK === "true" ? StorybookUI : App)
