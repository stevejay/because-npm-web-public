import { stubTrue } from "lodash";
import React from "react";
import ContentBox from "./content-box";
import ContentText from "./content-text";
import styles from "./error-message.module.scss";
import getErrorStatusCode from "./get-error-status-code";

const ERROR_MESSAGES: { [key: number]: string } = {
  404: "Not Found",
  500: "Server Error"
};

type Props = {
  error: any;
};

const ErrorMessage = ({ error }: Props) => {
  const statusCode = getErrorStatusCode(error);
  return (
    <ContentBox>
      <div className={styles.container}>
        <span className={styles.errorCode}>{statusCode}</span>
        <ContentText className={styles.title}>
          {ERROR_MESSAGES[statusCode]}
        </ContentText>
      </div>
    </ContentBox>
  );
};

export default React.memo(ErrorMessage, stubTrue);
