import window from "global/window";
import { stubTrue } from "lodash";
import React from "react";
import { useAppBus } from "../app-bus";

interface IHasScrollTo {
  scrollTo: Window["scrollTo"];
}

type Props = {
  scrollTarget?: Partial<IHasScrollTo>;
};

const ScrollListener = ({ scrollTarget = window }: Props) => {
  const appBus = useAppBus();

  const handleScrollToTop = React.useCallback(() => {
    if (scrollTarget && scrollTarget.scrollTo) {
      scrollTarget.scrollTo(0, 0);
    }
  }, []);

  React.useEffect(() => {
    appBus.scrollToTop.addListener(handleScrollToTop);
    return () => {
      appBus.scrollToTop.removeListener(handleScrollToTop);
    };
  }, []);

  return null;
};

export default React.memo(ScrollListener, stubTrue);
