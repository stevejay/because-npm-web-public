import React from "react";
import { BrowserRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import PackageDetail from "../package-detail";

storiesOf("Packages/PackageDetail", module)
  .add("Loading", () => (
    <BrowserRouter>
      <PackageDetail nodeId="formik" loading node={null} />
    </BrowserRouter>
  ))
  .add("Loaded", () => (
    <BrowserRouter>
      <PackageDetail
        nodeId="formik"
        loading={false}
        node={{
          id: "formik",
          link: "https://test.com/some-page",
          description: "A description for this package that is not very long"
        }}
      />
    </BrowserRouter>
  ));
