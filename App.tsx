import { NativeBaseProvider } from "native-base"
import React from "react"
import { RootNavigator } from "./src/navigation"
import { customTheme } from "./src/theme"

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <RootNavigator />
    </NativeBaseProvider>
  )
}
