/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { NativeBaseProvider } from "native-base"
import { ReactNode } from "react"
import { customTheme } from "../theme"

interface Props<ParamList extends ParamListBase, Props = any> {
  mockedScreen?: {
    name: keyof ParamList
    component: React.ComponentType<Props>
    params?: RouteProp<ParamList, keyof ParamList>["params"]
  }
  children?: ReactNode
}

export default function TestProvider<ParamList extends ParamListBase>({
  mockedScreen,
  children,
}: Props<ParamList>) {
  const Stack = createStackNavigator<ParamList>()

  if (mockedScreen && children) {
    throw Error("You can only pass a screen or children, not both.")
  }

  return (
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
      theme={customTheme}
    >
      <NavigationContainer>
        {mockedScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              initialParams={mockedScreen.params}
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
