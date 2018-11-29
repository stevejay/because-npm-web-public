import * as React from "react";
import Delay from "react-delay";
import { IoIosHourglass as TimeIcon } from "react-icons/io";
import ContentBox from "./content-box";
import styles from "./loading.css";

interface IProps {
  delayMs?: number;
}

const Loading: React.SFC<IProps> = ({ delayMs = 0 }) => {
  if (delayMs) {
    return (
      <ContentBox>
        <Delay wait={delayMs}>
          <TimeIcon className={styles.icon} />
        </Delay>
      </ContentBox>
    );
  }
  return (
    <ContentBox>
      <TimeIcon className={styles.icon} />
    </ContentBox>
  );
};

export default Loading;
