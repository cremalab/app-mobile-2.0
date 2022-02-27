import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import SettingsScreen from "."

describe("SettingsScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Settings"

    // Act
    const { getByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Settings", component: SettingsScreen }}
      />,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
