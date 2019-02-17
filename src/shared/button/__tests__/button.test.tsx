import Button, { ButtonType } from "../button";
import React from "react";
import { render } from "react-testing-library";
import { noop } from "lodash";

test("displays correctly", async () => {
  const { container } = render(
    <Button type={ButtonType.Primary} onClick={noop}>
      The text
    </Button>
  );
  expect(container).toMatchSnapshot();
});