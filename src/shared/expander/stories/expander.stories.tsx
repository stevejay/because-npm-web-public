import React from "react";
import { storiesOf } from "@storybook/react";
import Expander from "../expander";

storiesOf("Expander", module)
  .add("Expanded", () => (
    <Expander expandedOnMount headerContent={<span>Header Content</span>}>
      <div>The children</div>
    </Expander>
  ))
  .add("Not Expanded", () => (
    <Expander
      expandedOnMount={false}
      headerContent={<span>Header Content</span>}
    >
      <div>The children</div>
    </Expander>
  ));
