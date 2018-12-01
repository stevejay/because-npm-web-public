import { EventType } from "./types";

export class AppBusEvent {
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
