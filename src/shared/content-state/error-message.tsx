import * as React from "react";
import styles from "./error-message.css";

interface IProps {
  errorCode: string | number;
  title: string;
}

const ErrorMessage = ({ errorCode, title }: IProps) => (
  <h1 className={styles.container}>
    <span className={styles.errorCode}>{errorCode}</span>
    <span className={styles.title}>{title}</span>
  </h1>
);

export default ErrorMessage;
