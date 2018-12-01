import { Emitter } from "mitt";
import * as Mitt from "mitt/dist/mitt.umd";
import * as React from "react";

const SEARCH_BAR_BLUR = "search-bar-blur";
const SEARCH_BAR_FOCUS = "search-bar-focus";
const SCROLL_TO_TOP = "scroll-to-top";

class AppBus {
  private bus: mitt.Emitter;

  constructor() {
    this.bus = new Mitt() as Emitter;
  }

  public addFocusSearchBarListener(callback: mitt.Handler) {
    this.bus.on(SEARCH_BAR_FOCUS, callback);
  }

  public removeFocusSearchBarListener(callback: mitt.Handler) {
    this.bus.off(SEARCH_BAR_FOCUS, callback);
  }

  public focusSearchBar() {
    this.bus.emit(SEARCH_BAR_FOCUS);
  }

  public addBlurSearchBarListener(callback: mitt.Handler) {
    this.bus.on(SEARCH_BAR_BLUR, callback);
  }

  public removeBlurSearchBarListener(callback: mitt.Handler) {
    this.bus.off(SEARCH_BAR_BLUR, callback);
  }

  public blurSearchBar() {
    this.bus.emit(SEARCH_BAR_BLUR);
  }

  public addScrollToTopListener(callback: mitt.Handler) {
    this.bus.on(SCROLL_TO_TOP, callback);
  }

  public removeScrollToTopListener(callback: mitt.Handler) {
    this.bus.off(SCROLL_TO_TOP, callback);
  }

  public scrollToTop() {
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
