import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import ProfileScreen from "."

describe("ProfileScreen", () => {
  it("renders", async () => {
    // Arrange
    const title = "Profile"

    // Act
    const { queryByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Profile", component: ProfileScreen }}
      />,
    )
    const receivedTitle = queryByText(title)

    // Assert
    expect(receivedTitle).toBeDefined()
  })
})
