// import * as Mitt from "mitt/dist/mitt.umd";
import { Emitter } from "mitt";
import mitt from "mitt";
import { EventType } from "./types";

class AppBusEvent {
  private bus: mitt.Emitter;
  private event: EventType;

  constructor(busObj: mitt.Emitter, event: EventType) {
    this.bus = busObj;
    this.event = event;
  }

  public addListener(callback: mitt.Handler) {
    this.bus.on(this.event, callback);
  }

  public removeListener(callback: mitt.Handler) {
    this.bus.off(this.event, callback);
  }

  public emit() {
    this.bus.emit(this.event);
  }
}

export default class AppBus {
  public searchBarBlur: AppBusEvent;
  public searchBarFocus: AppBusEvent;
  public scrollToTop: AppBusEvent;

  private bus: mitt.Emitter;

  constructor() {
    this.bus = new mitt() as Emitter;
    this.searchBarBlur = new AppBusEvent(this.bus, EventType.SearchBarBlur);
    this.searchBarFocus = new AppBusEvent(this.bus, EventType.SearchBarFocus);
    this.scrollToTop = new AppBusEvent(this.bus, EventType.ScrollToTop);
  }
}
