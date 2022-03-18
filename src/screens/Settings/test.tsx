import React from "react"
import { MockNavigator, render } from "test-utils"
import { MainStackParamList } from "../../types/Navigation"
import SettingsScreen from "."

describe("SettingsScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Settings"

    // Act
    const { getByText } = render(
      <MockNavigator<MainStackParamList>
        component={SettingsScreen}
        name="Settings"
      />,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
