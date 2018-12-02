import * as _ from "lodash";
import * as React from "react";
import ContentBox from "./content-box";
import ContentText from "./content-text";
import styles from "./error-message.css";
import getErrorStatusCode from "./get-error-status-code";

const ERROR_MESSAGES = {
  404: "Not Found",
  500: "Server Error"
};

interface IProps {
  error: any;
}

const ErrorMessage: React.SFC<IProps> = ({ error }) => {
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

export default ErrorMessage;
