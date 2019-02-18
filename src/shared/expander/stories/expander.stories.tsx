import React from "react";
import { storiesOf } from "@storybook/react";
import Expander from "../expander";
import "../../../styles/app.scss";

storiesOf("Expander", module).add("Expanded", () => (
  <Expander expandedOnMount={true} headerContent={<span>Header Content</span>}>
    <div>The children</div>
  </Expander>
));
