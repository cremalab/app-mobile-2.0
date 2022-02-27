/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useNavigationTheme } from "../hooks"

interface Props<ParamList extends ParamListBase, Props = any> {
  name: keyof ParamList
  component: React.ComponentType<Props>
  params?: RouteProp<ParamList, keyof ParamList>["params"]
}

export default function MockNavigator<ParamList extends ParamListBase>({
  params,
  component,
  name,
}: Props<ParamList>) {
  const { navigationTheme } = useNavigationTheme()
  const Stack = createStackNavigator<ParamList>()

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          initialParams={params}
          name={name}
          component={component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
