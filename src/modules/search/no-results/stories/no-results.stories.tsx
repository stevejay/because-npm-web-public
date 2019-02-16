import React from "react";
import { storiesOf } from "@storybook/react";
import NoResults from "../no-results";
import "../../../../styles/app.scss";

storiesOf("Search/NoResults", module).add("Basic", () => <NoResults />);
