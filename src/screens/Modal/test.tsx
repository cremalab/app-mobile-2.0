import { render } from "@testing-library/react-native"
import React from "react"
import { TestProvider } from "../../testing"
import { RootStackParamList } from "../../types/Navigation"
import ModalScreen from "."

describe("ModalScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Modal"
    const message = "The coolest message you ever did see!"

    // Act
    const { getByText } = render(
      <TestProvider<RootStackParamList>
        mockedScreen={{
          name: "Modal",
          component: ModalScreen,
          params: { message },
        }}
      />,
    )
    const receivedTitle = getByText(title)
    const receivedMessage = getByText(message)

    // Assert
    expect(receivedTitle).toBeTruthy()
    expect(receivedMessage).toBeTruthy()
  })
})
