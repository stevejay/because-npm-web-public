import window from "global/window";
import * as React from "react";
import { IAppBusProps, withAppBus } from "src/shared/app-bus";

class ScrollResetListener extends React.Component<IAppBusProps> {
  public componentDidMount() {
    this.props.appBus.addScrollToTopListener(this.handleScrollToTop);
  }

  public componentWillUnmount() {
    this.props.appBus.removeScrollToTopListener(this.handleScrollToTop);
  }

  public render() {
    return null;
  }

  private handleScrollToTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };
}

export default withAppBus<{}>(ScrollResetListener);
