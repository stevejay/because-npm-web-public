import * as React from "react";
import { IconType } from "react-icons/lib/iconBase";
import ContentBox from "./content-box";
import ContentText from "./content-text";
import styles from "./message.module.scss";

interface IProps {
  icon?: IconType;
  children: React.ReactNode;
}

const Message: React.SFC<IProps> = ({ icon: Icon, children }) => (
  <ContentBox>
    {Icon && <Icon className={styles.icon} />}
    <ContentText>{children}</ContentText>
  </ContentBox>
);

export default Message;
