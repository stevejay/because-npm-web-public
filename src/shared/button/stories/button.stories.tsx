import { noop } from "lodash";
import React from "react";
import { host } from "storybook-host";
import { storiesOf } from "@storybook/react";
import Button, { ButtonType } from "../button";
import "../../../styles/app.scss";

const buttonHost = host({
  align: "center middle",
  backdrop: "transparent"
});

storiesOf("Button", module)
  .addDecorator(buttonHost)
  .add("Primary", () => (
    <Button type={ButtonType.Primary} onClick={noop}>
      Some Text
    </Button>
  ))
  .add("Secondary", () => (
    <Button type={ButtonType.Secondary} onClick={noop}>
      Some Text
    </Button>
  ));
