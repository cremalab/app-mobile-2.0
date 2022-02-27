import { render } from "@testing-library/react-native"
import React from "react"
import { MockNavigator, TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import ExploreScreen from "."

describe("ExploreScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Explore"

    // Act
    const { getByText } = render(
      <TestProvider>
        <MockNavigator<MainStackParamList>
          component={ExploreScreen}
          name="Explore"
        />
      </TestProvider>,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
