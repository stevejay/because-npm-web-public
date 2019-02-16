import window from "global/window";
import { stubTrue } from "lodash";
import React from "react";
import { useAppBus } from "../app-bus";

function handleScrollToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}

const ScrollListener = () => {
  const appBus = useAppBus();

  React.useEffect(() => {
    appBus.scrollToTop.addListener(handleScrollToTop);
    return () => {
      appBus.scrollToTop.removeListener(handleScrollToTop);
    };
  }, []);

  return null;
};

export default React.memo(ScrollListener, stubTrue);
