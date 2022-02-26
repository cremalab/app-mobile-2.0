import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { MainStackParamList } from "../../types/Navigation"
import ExploreScreen from "."

describe("ExploreScreen", () => {
  it("renders", async () => {
    // Arrange
    const title = "Explore"

    // Act
    const { queryByText } = render(
      <TestProvider<MainStackParamList>
        mockedScreen={{ name: "Explore", component: ExploreScreen }}
      />,
    )
    const receivedTitle = queryByText(title)

    // Assert
    expect(receivedTitle).toBeDefined()
  })
})
