import * as React from "react";
import * as mitt from "mitt";

const SEARCH_BAR_FOCUS = "search-bar-focus";
const SEARCH_BAR_BLUR = "search-bar-blur";
const SCROLL_TO_TOP = "scroll-to-top";

class AppBus {
  private bus = new mitt();

  addFocusSearchBarListener(callback: mitt.Handler) {
    this.bus.on(SEARCH_BAR_FOCUS, callback);
  }

  removeFocusSearchBarListener(callback: mitt.Handler) {
    this.bus.off(SEARCH_BAR_FOCUS, callback);
  }

  focusSearchBar() {
    this.bus.emit(SEARCH_BAR_FOCUS);
  }

  addBlurSearchBarListener(callback: mitt.Handler) {
    this.bus.on(SEARCH_BAR_BLUR, callback);
  }

  removeBlurSearchBarListener(callback: mitt.Handler) {
    this.bus.off(SEARCH_BAR_BLUR, callback);
  }

  blurSearchBar() {
    this.bus.emit(SEARCH_BAR_BLUR);
  }

  addScrollToTopListener(callback: mitt.Handler) {
    this.bus.on(SCROLL_TO_TOP, callback);
  }

  removeScrollToTopListener(callback: mitt.Handler) {
    this.bus.off(SCROLL_TO_TOP, callback);
  }

  scrollToTop() {
    this.bus.emit(SCROLL_TO_TOP);
  }
}

const appBus = new AppBus();

export interface IAppBusProps {
  appBus: AppBus;
}

export function withAppBus<P = {}, S = any>(
  WrappedComponent:
    | React.ComponentClass<P & IAppBusProps, S>
    | React.StatelessComponent<P & IAppBusProps>
) {
  return (props: P) => <WrappedComponent appBus={appBus} {...props} />;
}
