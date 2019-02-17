import React from "react";
import { render } from "react-testing-library";
import Page from "../page";

test("displays the children", async () => {
  const { getByTestId } = render(
    <Page>
      <div data-testid="child" />
    </Page>
  );
  expect(getByTestId("child")).toBeInTheDocument();
});
