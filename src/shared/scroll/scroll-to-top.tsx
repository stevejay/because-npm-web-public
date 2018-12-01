import * as React from "react";
import { IAppBusProps, withAppBus } from "src/shared/app-bus/app-bus";

class ScrollToTop extends React.Component<IAppBusProps> {
  public componentDidMount() {
    this.props.bus.scrollToTop.emit();
  }

  public render() {
    return null;
  }
}

export default withAppBus<{}>(ScrollToTop);
