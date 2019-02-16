import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { useAppBus } from "../../../shared/app-bus";
import Button, { ButtonType } from "../../../shared/button";
import Section from "../section";
import styles from "./discovering-section.module.scss";
import { ReactComponent as GraphImage } from "./graph.svg";

const DiscoveringSection = ({ history }: RouteComponentProps) => {
  const appBus = useAppBus();

  const handleClick = () => {
    appBus.searchBarFocus.emit();
    history.push("/search");
  };

  return (
    <Section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h1 className={styles.header}>
            Discover alternative packages in the npm registry
          </h1>
          <p className={styles.paragraph}>
            View alternatives to the packages you know and why people have made
            the switch.
          </p>
          <Button
            type={ButtonType.Primary}
            className={styles.button}
            onClick={handleClick}
          >
            Search for a package
          </Button>
        </div>
        <div className={styles.column}>
          <GraphImage className={styles.image} />
        </div>
      </div>
    </Section>
  );
};

export default withRouter<RouteComponentProps>(DiscoveringSection);
