import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { render } from "@testing-library/react-native"
import { NativeBaseProvider } from "native-base"
import React from "react"
import { customTheme } from "../../theme"
import HomeScreen from "."

const Stack = createStackNavigator()

describe("HomeScreen", () => {
  it("renders", async () => {
    // Arrange
    const title = "Home"
    const subtitle =
      "This is the home screen. Open up your text editor and replace this text to start creating your first app!"

    // Act
    const { queryByText } = render(
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>,
    )
    const receivedTitle = queryByText(title)
    const receivedSubtitle = queryByText(subtitle)

    // Assert
    expect(receivedTitle).toBeDefined()
    expect(receivedSubtitle).toBeDefined()
  })
})
