import { Emitter } from "mitt";
import * as Mitt from "mitt/dist/mitt.umd";
import { AppBusEvent } from "./app-bus-event";
import { EventType } from "./types";

export default class AppBus {
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
