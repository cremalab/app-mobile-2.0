import React from "react"
import { MockNavigator, render } from "test-utils"
import { MainStackParamList } from "../../types/Navigation"
import ExploreScreen from "."

describe("ExploreScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Explore"

    // Act
    const { getByText } = render(
      <MockNavigator<MainStackParamList>
        component={ExploreScreen}
        name="Explore"
      />,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
