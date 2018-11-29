import * as React from "react";
import { IconType } from "react-icons/lib/iconBase";
import ContentBox from "./content-box";
import styles from "./message.css";

interface IProps {
  icon?: IconType;
  children: React.ReactNode;
}

const Message: React.SFC<IProps> = ({ icon: Icon, children }) => (
  <ContentBox>
    {Icon && <Icon className={styles.icon} />}
    <h2 className={styles.heading}>{children}</h2>
  </ContentBox>
);

export default Message;
