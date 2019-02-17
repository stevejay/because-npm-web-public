import Button, { ButtonType } from "../button";
import React from "react";
import { render } from "react-testing-library";
import { noop } from "lodash";
import userEvent from "user-event";

function renderButton(handleCallback = noop) {
  return render(
    <Button type={ButtonType.Primary} onClick={handleCallback}>
      The text
    </Button>
  );
}

test("renders as a button", async () => {
  const { getByText } = renderButton();
  const button = getByText(/The text/i);
  expect(button).toBeInTheDocument();
  expect(button.tagName).toEqual("BUTTON");
  expect(button.getAttribute("type")).toEqual("button");
});

test("wires up the onClick callback", async () => {
  const handleClick = jest.fn();
  const { getByText } = renderButton(handleClick);
  expect(handleClick).toHaveBeenCalledTimes(0);
  const button = getByText(/The text/i);
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
