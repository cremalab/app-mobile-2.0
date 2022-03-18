import React from "react"
import { MockNavigator, render } from "test-utils"
import { RootStackParamList } from "../../types/Navigation"
import ModalScreen from "."

describe("ModalScreen", () => {
  it("renders", () => {
    // Arrange
    const title = "Modal"
    const message = "The coolest message you ever did see!"

    // Act
    const { getByText } = render(
      <MockNavigator<RootStackParamList>
        component={ModalScreen}
        name="Modal"
        params={{ message }}
      />,
    )
    const receivedTitle = getByText(title)
    const receivedMessage = getByText(message)

    // Assert
    expect(receivedTitle).toBeTruthy()
    expect(receivedMessage).toBeTruthy()
  })
})
