import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { NativeBaseProvider } from "native-base"
import { ReactNode } from "react"
import { customTheme } from "../theme"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mockedScreen?: { name: string; component: React.ComponentType<any> }
  children?: ReactNode
}

export default function TestProvider({ mockedScreen, children }: Props) {
  const Stack = createStackNavigator()
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        {mockedScreen ? (
          <Stack.Navigator>
            <Stack.Screen
              name={mockedScreen.name}
              component={mockedScreen.component}
            />
          </Stack.Navigator>
        ) : (
          <>{children}</>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
