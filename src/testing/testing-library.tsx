// https://stackoverflow.com/questions/59017016/is-it-possible-to-wrap-each-individual-test-in-a-wrapper-component

import { RenderOptions, render } from "@testing-library/react-native"
import { JSXElementConstructor, ReactElement, ReactNode } from "react"
import { TestProvider } from "."

interface Props {
  children: ReactNode
}

// Any global providers needed for your tests can be added here

const Providers = ({ children }: Props) => {
  return <TestProvider>{children}</TestProvider>
}

const customRender = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(component, { wrapper: Providers, ...options })

export * from "@testing-library/react-native"

export { customRender as render }
