import { stubTrue } from "lodash";
import React from "react";
import { useAppBus } from "../app-bus";

const ScrollToTop = () => {
  const appBus = useAppBus();
  React.useEffect(() => {
    appBus.scrollToTop.emit();
  }, []);
  return null;
};

export default React.memo(ScrollToTop, stubTrue);
