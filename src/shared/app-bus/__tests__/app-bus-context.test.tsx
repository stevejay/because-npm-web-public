import { render } from "react-testing-library";
import { AppBusProvider, useAppBus } from "../app-bus-context";
import React from "react";
import userEvent from "user-event";

const TestEmitter = () => {
  const appBus = useAppBus();
  return (
    <button data-testid="button" onClick={() => appBus.scrollToTop.emit()} />
  );
};

const TestListener = ({ listener }: { listener: () => void }) => {
  const appBus = useAppBus();
  React.useLayoutEffect(() => {
    appBus.scrollToTop.addListener(listener);
  }, [listener, appBus]);
  return null;
};

test("emitted events are forwarded to listeners", () => {
  const listener = jest.fn();
  const { getByTestId } = render(
    <AppBusProvider>
      <TestEmitter />
      <TestListener listener={listener} />
    </AppBusProvider>
  );
  userEvent.click(getByTestId("button"));
  expect(listener).toBeCalledTimes(1);
});
