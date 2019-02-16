import { stubTrue } from "lodash";
import React from "react";
import { IconType } from "react-icons/lib/iconBase";
import ContentBox from "./content-box";
import ContentText from "./content-text";
import styles from "./message.module.scss";

type Props = {
  icon?: IconType;
  graphic?: React.FunctionComponent<any>;
  children: React.ReactNode;
};

const Message = ({ icon: Icon, graphic: Graphic, children }: Props) => (
  <ContentBox>
    {Icon && <Icon className={styles.icon} />}
    {Graphic && <Graphic className={styles.graphic} />}
    <ContentText>{children}</ContentText>
  </ContentBox>
);

export default React.memo(Message, stubTrue);
