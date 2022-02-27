import { NativeBaseProvider } from "native-base"
import { ReactNode } from "react"
import { customTheme } from "../theme"

interface Props {
  children?: ReactNode
}

export default function TestProvider({ children }: Props) {
  return (
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
      theme={customTheme}
    >
      {children}
    </NativeBaseProvider>
  )
}
