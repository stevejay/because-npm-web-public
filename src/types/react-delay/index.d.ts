declare module "react-delay" {
  import React from "react";
  import { ComponentType as Component } from "react";

  export interface IProps {
    wait: number;
  }

  export default class Delay extends React.Component<IProps, object> {}
}
