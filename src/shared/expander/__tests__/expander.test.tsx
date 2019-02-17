import React from "react";
import { render } from "react-testing-library";
import Expander from "../expander";
import userEvent from "user-event";

test("can be opened", async () => {
  const { getByLabelText, queryByTestId } = render(
    <Expander expandedOnMount={false} headerContent="Header text">
      <div data-testid="child" />
    </Expander>
  );
  expect(queryByTestId("child")).toBeNull();
  const button = getByLabelText("See comments");
  userEvent.click(button);
  expect(queryByTestId("child")).not.toBeNull();
});

test("can be closed", async () => {
  const { getByLabelText, queryByTestId } = render(
    <Expander expandedOnMount headerContent="Header text">
      <div data-testid="child" />
    </Expander>
  );
  expect(queryByTestId("child")).not.toBeNull();
  const button = getByLabelText("See comments");
  userEvent.click(button);
  expect(queryByTestId("child")).toBeNull();
});
