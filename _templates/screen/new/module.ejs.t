---
to: src/screens/<%= name %>/<%= name %>.tsx
---
<% if(!withExample) { -%>
import React from "react"
export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
import { Box, Button, Center, Text } from "native-base"
import React, { useState } from "react"

export function <%= name %>() {
  const [count, setCount] = useState(0)
  return (
    <Box safeArea flex="1">
      <Center>
        <Text>Hi, my name is <%= name %>!</Text>
        <Text>You clicked {count} times</Text>
        <Button onPress={() => setCount(count + 1)}>Click Me!</Button>
      </Center>
    </Box>
  )
}
<% } else { -%>
import { Box, Center, Text } from "native-base"
import React from "react"

export function <%= name %>() {
  return (
    <Box safeArea flex="1">
      <Center>
        <Text>Hi, my name is <%= name %>!</Text>
      </Center>
    </Box>
  )
}
<% } -%>