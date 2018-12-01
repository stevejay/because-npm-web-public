import * as React from "react";
import { IAppBusProps, withAppBus } from "src/shared/app-bus";

class ScrollToTop extends React.Component<IAppBusProps> {
  public componentDidMount() {
    this.props.appBus.scrollToTop();
  }

  public render() {
    return null;
  }
}

export default withAppBus<{}>(ScrollToTop);
