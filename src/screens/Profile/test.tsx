import React from "react"
import { MockNavigator, render } from "test-utils"
import { MainStackParamList } from "../../types/Navigation"
import ProfileScreen from "."

describe("ProfileScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Profile"

    // Act
    const { getByText } = render(
      <MockNavigator<MainStackParamList>
        component={ProfileScreen}
        name="Profile"
      />,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
