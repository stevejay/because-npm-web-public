import * as React from "react";
import Button, { ButtonType } from "src/shared/button";
import SectionContainer from "../section-container";
import styles from "./discovering-section.css";
import GraphImage from "./graph-image";

interface IProps {
  onSearchClick: () => void;
}

const DiscoveringSection = ({ onSearchClick }: IProps) => (
  <SectionContainer className={styles.section}>
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
          type={ButtonType.primary}
          className={styles.button}
          onClick={onSearchClick}
        >
          Search for a package
        </Button>
      </div>
      <div className={styles.column}>
        <GraphImage className={styles.image} />
      </div>
    </div>
  </SectionContainer>
);

export default DiscoveringSection;
