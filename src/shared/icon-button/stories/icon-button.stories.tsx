import React from "react";
import { IoIosSearch } from "react-icons/io";
import { host } from "storybook-host";
import { storiesOf } from "@storybook/react";
import IconButton from "../icon-button";
import "../../../styles/app.scss";

const buttonHost = host({
  align: "center middle",
  backdrop: "transparent"
});

storiesOf("IconButton", module)
  .addDecorator(buttonHost)
  .add("Basic", () => (
    <IconButton type="submit" ariaLabel="Submit search" icon={IoIosSearch} />
  ));
