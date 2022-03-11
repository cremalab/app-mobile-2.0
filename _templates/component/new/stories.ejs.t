---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { storiesOf } from "@storybook/react-native"
import React from "react"
import { <%= name %> } from "./<%= name %>"

<% if(withExample) { -%>
storiesOf("<%= name %>", module).add("example", () => <<%= name %> name="<%= name %>" />)
<% } else { -%>
storiesOf("<%= name %>", module).add("example", () => <<%= name %> />)
<% } -%>