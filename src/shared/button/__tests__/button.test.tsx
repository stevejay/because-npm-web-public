import Button, { ButtonType } from "../button";
import React from "react";
import { cleanup, render } from "react-testing-library";
import { noop } from "lodash";

afterEach(cleanup);

test("displays correctly", async () => {
  const { container } = render(
    <Button type={ButtonType.Primary} onClick={noop}>
      The text
    </Button>
  );
  expect(container).toMatchSnapshot();
});
