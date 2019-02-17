import { stubTrue } from "lodash";
import React from "react";
import Delay from "react-delay";
import { IoIosHourglass as TimeIcon } from "react-icons/io";
import ContentBox from "./content-box";
import styles from "./loading.module.scss";

type Props = {
  delayMs?: number;
};

const Loading = ({ delayMs = 0 }: Props) => {
  const icon = (
    <TimeIcon
      className={styles.icon}
      role="status"
      aria-live="polite"
      aria-label="Loading content from the server"
    />
  );
  const content = delayMs ? <Delay wait={delayMs}>{icon}</Delay> : icon;
  return <ContentBox>{content}</ContentBox>;
};

export default React.memo(Loading, stubTrue);
