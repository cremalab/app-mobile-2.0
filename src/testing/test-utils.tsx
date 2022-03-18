// https://testing-library.com/docs/react-native-testing-library/setup
import { RenderOptions, render } from "@testing-library/react-native"
import { ReactElement } from "react"
import MockNavigator from "./MockNavigator"
import TestProvider from "./TestProvider"

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(component, { wrapper: TestProvider, ...options })

export * from "@testing-library/react-native"

export { customRender as render, MockNavigator }
