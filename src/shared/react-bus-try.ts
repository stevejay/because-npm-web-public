import * as React from "react";
import * as PropTypes from "prop-types";
import * as mitt from "mitt";

const contextTypes = { reactBus: PropTypes.object };

export function withBus(name = "bus") {
  return function decorate(
    BaseComponent: React.ComponentClass | React.StatelessComponent
  ) {
    function WithBus(props: any, context: any) {
      return React.createElement(BaseComponent, {
        ...props,
        [name]: context.reactBus
      });
    }
    WithBus.contextTypes = contextTypes;
    return WithBus;
  };
}

export class Provider extends React.Component<{}> {
  bus: mitt.Emitter;

  constructor(props: {}) {
    super(props);
    this.bus = new mitt();
  }

  getChildContext() {
    return { reactBus: this.bus };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = contextTypes;
