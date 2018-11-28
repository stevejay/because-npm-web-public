// import window from "global/window";
import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { SCROLL_TO_TOP } from "src/shared/bus-events";

class ScrollToTop extends React.Component<{} & IBusProps> {
  public componentDidMount() {
    this.props.bus.emit(SCROLL_TO_TOP);
  }

  public render() {
    return null;
  }
}

export default withBus<{}>()(ScrollToTop);
