import React from "react"
import { MockNavigator, render } from "test-utils"
import { MainStackParamList } from "../../types/Navigation"
import HomeScreen from "."

describe("HomeScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Home"
    const subtitle =
      "This is the home screen. Open up your text editor and replace this text to start creating your first app!"
    // Act
    const { getByText } = render(
      <MockNavigator<MainStackParamList> component={HomeScreen} name="Home" />,
    )
    const receivedTitle = getByText(title)
    const receivedSubtitle = getByText(subtitle)
    // Assert
    expect(receivedTitle).toBeTruthy()
    expect(receivedSubtitle).toBeTruthy()
  })
})
