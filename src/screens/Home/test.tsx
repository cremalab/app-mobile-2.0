import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
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
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Home", component: HomeScreen }}
      />,
    )
    const receivedTitle = getByText(title)
    const receivedSubtitle = getByText(subtitle)
    // Assert
    expect(receivedTitle).toBeTruthy()
    expect(receivedSubtitle).toBeTruthy()
  })
})
