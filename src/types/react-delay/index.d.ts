declare module "react-delay" {
  import * as React from "react";
  import { ComponentType as Component } from "react";

  export interface IProps {
    wait: number;
  }

  export default class Delay extends React.Component<IProps, {}> {}
}
