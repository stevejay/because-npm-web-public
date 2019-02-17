import { render } from "react-testing-library";
import ScrollListener from "../scroll-listener";
import React from "react";
import userEvent from "user-event";
import { AppBusProvider, useAppBus } from "../../app-bus";

const TestEmitter = () => {
  const appBus = useAppBus();
  return (
    <button data-testid="button" onClick={() => appBus.scrollToTop.emit()} />
  );
};

test("scroll listener responds to scrollToTop events", () => {
  const scrollTarget = { scrollTo: jest.fn() };
  const { getByTestId } = render(
    <AppBusProvider>
      <TestEmitter />
      <ScrollListener scrollTarget={scrollTarget} />
    </AppBusProvider>
  );
  userEvent.click(getByTestId("button"));
  expect(scrollTarget.scrollTo).toBeCalledTimes(1);
  expect(scrollTarget.scrollTo).toHaveBeenLastCalledWith(0, 0);
});
