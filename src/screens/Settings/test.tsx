import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import SettingsScreen from "."

describe("SettingsScreen", () => {
  it("renders", async () => {
    // Arrange
    const title = "Settings"

    // Act
    const { queryByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Settings", component: SettingsScreen }}
      />,
    )
    const receivedTitle = queryByText(title)

    // Assert
    expect(receivedTitle).toBeDefined()
  })
})
