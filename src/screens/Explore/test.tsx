import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import ExploreScreen from "."

describe("ExploreScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Explore"

    // Act
    const { getByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Explore", component: ExploreScreen }}
      />,
    )
    const receivedTitle = getByText(title)

    // Assert
    expect(receivedTitle).toBeTruthy()
  })
})
