import * as React from "react";
import { shouldUpdate } from "recompact";
import ScrollToTop from "../../shared/scroll/scroll-to-top";
import LegalContent from "./legal-content";

const CreditsPage = () => (
  <>
    <ScrollToTop />
    <LegalContent>
      <h1>Credits</h1>
      <p>
        Icons made by{" "}
        <a href="http://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </p>
    </LegalContent>
  </>
);

export default shouldUpdate(() => false)(CreditsPage);
