import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import HomeScreen from "."

describe("HomeScreen", () => {
  it("renders", async () => {
    // Arrange
    const title = "Home"
    const subtitle =
      "This is the home screen. Open up your text editor and replace this text to start creating your first app!"

    // Act
    const { queryByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Home", component: HomeScreen }}
      />,
    )
    const receivedTitle = queryByText(title)
    const receivedSubtitle = queryByText(subtitle)

    // Assert
    expect(receivedTitle).toBeDefined()
    expect(receivedSubtitle).toBeDefined()
  })
})
