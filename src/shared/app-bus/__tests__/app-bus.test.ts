import AppBus from "../app-bus";

test("searchBarBlur bus", () => {
  const appBus = new AppBus();
  const listener = jest.fn();
  appBus.searchBarBlur.addListener(listener);
  appBus.searchBarBlur.emit();
  appBus.searchBarBlur.removeListener(listener);
  expect(listener).toHaveBeenCalledTimes(1);
});

test("searchBarFocus bus", () => {
  const appBus = new AppBus();
  const listener = jest.fn();
  appBus.searchBarFocus.addListener(listener);
  appBus.searchBarFocus.emit();
  appBus.searchBarFocus.removeListener(listener);
  expect(listener).toHaveBeenCalledTimes(1);
});

test("scrollToTop bus", () => {
  const appBus = new AppBus();
  const listener = jest.fn();
  appBus.scrollToTop.addListener(listener);
  appBus.scrollToTop.emit();
  appBus.scrollToTop.removeListener(listener);
  expect(listener).toHaveBeenCalledTimes(1);
});
