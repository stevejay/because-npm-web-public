import * as React from "react";
import ContentBox from "./content-box";
import styles from "./message.css";

interface IProps {
  icon?: any; // React.ComponentType;
  children: React.ReactNode;
}

const Message = ({ icon: Icon, children }: IProps) => (
  <ContentBox>
    {Icon && <Icon className={styles.icon} />}
    <h2 className={styles.heading}>{children}</h2>
  </ContentBox>
);

export default Message;
