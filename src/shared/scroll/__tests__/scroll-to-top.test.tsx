import { render } from "react-testing-library";
import { AppBusProvider, useAppBus } from "../../app-bus";
import React from "react";
import ScrollToTop from "../scroll-to-top";

// const TestEmitter = () => {
//   const appBus = useAppBus();
//   return (
//     <button data-testid="button" onClick={() => appBus.scrollToTop.emit()} />
//   );
// };

const TestListener = ({ listener }: { listener: () => void }) => {
  const appBus = useAppBus();
  React.useLayoutEffect(() => {
    appBus.scrollToTop.addListener(listener);
    return () => {
      appBus.scrollToTop.removeListener(listener);
    };
  }, [listener, appBus]);
  return null;
};

test("emitted events are forwarded to listeners", () => {
  const listener = jest.fn();
  render(
    <AppBusProvider>
      <ScrollToTop />
      <TestListener listener={listener} />
    </AppBusProvider>
  );
  expect(listener).toBeCalledTimes(1);
});
