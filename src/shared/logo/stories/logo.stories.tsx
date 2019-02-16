import React from "react";
import { BrowserRouter } from "react-router-dom";
import { host } from "storybook-host";
import { storiesOf } from "@storybook/react";
import Logo from "../logo";
import "../../../styles/app.scss";

storiesOf("Logo", module)
  .addDecorator(
    host({
      align: "center middle",
      backdrop: "transparent"
    })
  )
  .add("Basic", () => (
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  ));
