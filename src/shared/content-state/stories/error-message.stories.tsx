import React from "react";
import { storiesOf } from "@storybook/react";
import ErrorMessage from "../error-message";
import host from "./host";

storiesOf("ContentState/ErrorMessage", module)
  .addDecorator(host)
  .add("404", () => <ErrorMessage error={404} />)
  .add("500", () => <ErrorMessage error={500} />);
