import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { RootStackParamList } from "../../types/Navigation"
import ModalScreen from "."

describe("ModalScreen", () => {
  it("renders", async () => {
    // Arrange
    const title = "Modal"
    const message = "The coolest message you ever did see!"

    // Act
    const { queryByText } = render(
      <TestProvider<RootStackParamList>
        mockedScreen={{
          name: "Modal",
          component: ModalScreen,
          params: { message },
        }}
      />,
    )
    const receivedTitle = queryByText(title)
    const receivedMessage = queryByText(message)

    // Assert
    expect(receivedTitle).toBeDefined()
    expect(receivedMessage).toBeDefined()
  })
})
