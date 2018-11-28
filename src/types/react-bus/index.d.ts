// Has a big assumption: you'll keep the bus prop name
// as the default of 'bus'.

declare module "react-bus" {
  import * as React from "react";
  import { ComponentType as Component } from "react";

  export interface IBusProps {
    bus: Bus;
  }

  export function withBus<P extends object>(): (
    baseComponent: any
  ) => // baseComponent: Component<P & IBusProps>
  Component<P>;

  export type Bus = {
    on: (event: string, listener: () => void) => void;
    off: (event: string, listener: () => void) => void;
    emit: (event: string, payload?: any) => void;
  };

  export class Provider extends React.Component<any, {}> {}
}
