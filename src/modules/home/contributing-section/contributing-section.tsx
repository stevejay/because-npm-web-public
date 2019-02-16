import React from "react";
import Section from "../section";
import styles from "./contributing-section.module.scss";
import { ReactComponent as ContributingImage } from "./contributing.svg";

const ContributingSection = () => (
  <Section className={styles.section}>
    <h2 className={styles.header}>
      Want to contribute to the graph? Just tweet!
    </h2>
    <div className={styles.row}>
      <div className={styles.column}>
        <ContributingImage className={styles.contributingImage} />
      </div>
      <div className={styles.column}>
        <p className={styles.displayParagraph}>
          To comment on why someone might switch from package-a to package-b,
          send a tweet to <strong>@BecauseNpm</strong>:
        </p>
        <p className={styles.tweet}>
          <strong>@BecauseNpm</strong> package&#8209;a <strong>to</strong>{" "}
          package&#8209;b
          <strong> because</strong> your reasons here
        </p>
        <p className={styles.paragraph}>
          Package names must exactly correspond to those in the npm registry.
          You can omit the initial <strong>@</strong> symbol for{" "}
          <a href="https://docs.npmjs.com/getting-started/scoped-packages">
            scoped packages
          </a>
          . You can use <strong>bc</strong> or <strong>b/c</strong> instead of
          <strong> because</strong>.
        </p>
        <p className={styles.paragraph}>
          See the <a href="https://twitter.com/becausenpm">@BecauseNpm</a>{" "}
          Twitter homepage for real example tweets.
        </p>
      </div>
    </div>
  </Section>
);

export default ContributingSection;
