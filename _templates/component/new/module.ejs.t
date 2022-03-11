---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% if(!withExample) { -%>
import React from "react"
export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
import { Box, Button, Text } from "native-base"
import React, { useState } from "react"

interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  const [count, setCount] = useState(0)
  return (
    <Box>
      <Text>Hi, my name is {name}!</Text>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)}>Click Me!</Button>
    </Box>
  )
}
<% } else { -%>
import { Box, Text } from "native-base"
import React from "react"

interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  return (
    <Box>
      <Text>Hi, my name is {name}!</Text>
    </Box>
  )
}
<% } -%>