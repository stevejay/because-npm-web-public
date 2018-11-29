import window from "global/window";
import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { SCROLL_TO_TOP } from "src/shared/bus-events";

class ScrollResetListener extends React.Component<IBusProps> {
  public componentDidMount() {
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
      window.scrollTo(0, 0);
    }
  };
}

export default withBus<{}>()(ScrollResetListener);
