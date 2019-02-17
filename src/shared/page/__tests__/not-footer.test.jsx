import React from "react";
import { render } from "react-testing-library";
import NotFooter from "../not-footer";

test("displays the children", async () => {
  const { getByTestId } = render(
    <NotFooter>
      <div data-testid="child" />
    </NotFooter>
  );
  expect(getByTestId("child")).toBeInTheDocument();
});
