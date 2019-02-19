import Page from "../page";
import NotFooter from "../not-footer";
import React from "react";
import { storiesOf } from "@storybook/react";
import "../../../styles/app.scss";

storiesOf("Page", module).add("Page Structure", () => (
  <Page>
    <NotFooter>Some content</NotFooter>
    <footer
      style={{
        backgroundColor: "papayawhip",
        height: "25vh",
        minHeight: 30
      }}
    />
  </Page>
));
