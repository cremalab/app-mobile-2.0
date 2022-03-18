import { RenderOptions, render } from "@testing-library/react-native"
import { ReactElement } from "react"
import { TestProvider } from "."

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(component, { wrapper: TestProvider, ...options })

export * from "@testing-library/react-native"

export { customRender as render }
