import React from "react";
import { storiesOf } from "@storybook/react";
import Loading from "../loading";
import host from "./host";

storiesOf("ContentState/Loading", module)
  .addDecorator(host)
  .add("Active", () => <Loading />);
