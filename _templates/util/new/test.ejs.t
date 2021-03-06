---
to: src/utils/<%= name %>/<%= name %>.test.ts
sh: npx eslint -c ./.eslintrc.js ./src/utils/<%= name %> --ext .ts,.tsx --fix --quiet
---
import { <%= name %> } from "./<%= name %>"

describe("<%= name %>", () => {
  it("works", () => {
    // Arrange
    const valA = 1

    // Act
    const received = <%= name %>(valA)
    const expected = 1

    // Assert
    expect(received).toEqual(expected)
  })
})
