import Logo from "../logo";
import React from "react";
import { host } from "storybook-host";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";

storiesOf("Logo", module)
  .addDecorator(
    host({
      align: "center middle",
      backdrop: "transparent"
    })
  )
  .add("Basic", () => (
    <MemoryRouter>
      <Logo />
    </MemoryRouter>
  ));
