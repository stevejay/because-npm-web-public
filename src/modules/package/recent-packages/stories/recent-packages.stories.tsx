import { noop } from "lodash";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import RecentPackages from "../recent-packages";
import "../../../../styles/app.scss";

storiesOf("Packages/RecentPackages", module)
  .add("No Packages", () => (
    <BrowserRouter>
      <RecentPackages packages={[]} onLinkClick={noop} />
    </BrowserRouter>
  ))
  .add("Some Packages", () => (
    <BrowserRouter>
      <RecentPackages
        packages={[
          "formik",
          "react-final-form",
          "@some-scoped-package/redux-re-something"
        ]}
        onLinkClick={noop}
      />
    </BrowserRouter>
  ));
