# `./src/components`

This directory is intended to organize React Native components.

## Usage

1.  In terminal run `npm run new:component` to generate a new `component`
2.  Name your component, e.g. `ExampleComponent` (names will be transformed to **Pascal Case**, i.e. `ThisIsPascalCase`)
3.  Select whether or not your component will "useState"—selecting "yes" will add a hook.
4.  The following directory and files will be generated:
    ```
    src/components/ExampleComponent // component directory
    ├── index.tsx // Define and export the component here
    ├── README.md // Document the component
    ├── stories.tsx // Show the component in various states
    └── test.tsx // Test the component
    ```
5.  `ExampleComponent/index.tsx` contains component definition:

    ```tsx
    import { View } from "react-native"

    type Props = Readonly<{ name: string }>

    /**
     * ExampleComponent
     * ------------------------------------------------
     * DESCRIPTION_HERE
     */

    export function ExampleComponent({ name }: Props) {
      return <View>{name}</View>
    }
    ```

6.  `ExampleComponent/README.md` contains component documentation:

        # `<ExampleComponent />`

         DESCRIPTION_HERE

         ## Directory Structure

         - `stories.tsx`: Component playground (`npm run test:playground`)
         - `test.tsx`: Component tests (`npm run test:unit`)
         - `index.tsx`: Component code
         - `README.md`: Component documentation (hey, that's me!)

7.  `ExampleComponent/stories.tsx` contains component stories:

    ```tsx
    import { ExampleComponent } from "."
    import { storiesOf } from "@storybook/react-native"

    /**
     * See Storybook Docs: Writing Stories
     * https://storybook.js.org/docs/basics/writing-stories/
     */

    storiesOf("ExampleComponent", () => {
      return <ExampleComponent name="ExampleComponent" />
    })
    ```

8.  `ExampleComponent/test.tsx` contains component tests:

    ```tsx
    import { ExampleComponent } from "."
    import React from "react"
    import { render } from "@testing-library/react-native"

    describe("ExampleComponent", () => {
      it("name prop is rendered", () => {
        // Arrange
        const name = "ExampleComponent"

        // Act
        const { getByText } = render(<ExampleComponent name={name} />)
        const received = getByText(name)

        // Assert
        expect(received).toBeTruthy()
      })
    })
    ```
