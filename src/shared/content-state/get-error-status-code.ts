import { get, isFinite } from "lodash";

export default function getErrorStatusCode(error: any) {
  if (isFinite(error)) {
    return error;
  }

  if (!error) {
    return 500;
  }

  if (error.status) {
    return Number(error.status);
  }

  if (error.statusCode) {
    return Number(error.statusCode);
  }

  const gqlMessage = get(error, "graphQLErrors[0].message");
  if (gqlMessage === "Response code 404 (Not Found)") {
    return 404;
  }

  return 500;
}
