import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import ProfileScreen from "."

describe("ProfileScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Profile"

    // Act
    const { getByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Profile", component: ProfileScreen }}
      />,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
