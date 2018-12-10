import { Emitter } from "mitt";
import * as Mitt from "mitt/dist/mitt.umd";
import * as React from "react";
import { AppBusEvent } from "./app-bus-event";
import { EventType } from "./types";

class AppBus {
  public searchBarBlur: AppBusEvent;
  public searchBarFocus: AppBusEvent;
  public scrollToTop: AppBusEvent;

  private bus: mitt.Emitter;

  constructor() {
    this.bus = new Mitt() as Emitter;
    this.searchBarBlur = new AppBusEvent(this.bus, EventType.SearchBarBlur);
    this.searchBarFocus = new AppBusEvent(this.bus, EventType.SearchBarFocus);
    this.scrollToTop = new AppBusEvent(this.bus, EventType.ScrollToTop);
  }
}

const bus = new AppBus();

export interface IAppBusProps {
  bus: any; // TODO get rid of any here
}

export function withAppBus<P = {}, S = any>(
  WrappedComponent:
    | React.ComponentClass<P & IAppBusProps, S>
    | React.StatelessComponent<P & IAppBusProps>
) {
  return (props: P) => <WrappedComponent bus={bus} {...props} />;
}
