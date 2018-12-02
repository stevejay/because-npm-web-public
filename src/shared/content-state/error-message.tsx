import * as React from "react";
import ContentText from "./content-text";
import styles from "./error-message.css";

interface IProps {
  errorCode: string | number;
  title: string;
}

const ErrorMessage: React.SFC<IProps> = ({ errorCode, title }) => (
  <div className={styles.container}>
    <span className={styles.errorCode}>{errorCode}</span>
    <ContentText>{title}</ContentText>
  </div>
);

export default ErrorMessage;
