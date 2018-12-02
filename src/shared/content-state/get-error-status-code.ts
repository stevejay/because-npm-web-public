import * as _ from "lodash";

export default function getErrorStatusCode(error: any) {
  if (!error) {
    return 500;
  } else if (error.status) {
    return Number(error.status);
  } else if (error.statusCode) {
    return Number(error.statusCode);
  } else if (
    _.get(error, "graphQLErrors[0].message") === "Response code 404 (Not Found)"
  ) {
    return 404;
  }
  return 500;
}
