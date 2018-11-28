// import window from "global/window";
import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { SCROLL_TO_TOP } from "src/shared/bus-events";

class ScrollResetListener extends React.Component<IBusProps> {
  public componentDidMount() {
    // tslint:disable-next-line:no-console
    console.log("Should only mount one ScrollResetListener");
    this.props.bus.on(SCROLL_TO_TOP, this.handleScrollToTop);
  }

  public componentWillUnmount() {
    this.props.bus.off(SCROLL_TO_TOP, this.handleScrollToTop);
  }

  public render() {
    return null;
  }

  private handleScrollToTop = () => {
    if (window) {
      // tslint:disable-next-line:no-console
      console.log("*** resetting scroll to top ***");
      window.scrollTo(0, 0);
    }
  };
}

export default withBus()(ScrollResetListener);
