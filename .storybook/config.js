import { addDecorator, configure } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-backgrounds";

addDecorator(
  withBackgrounds([
    { name: "main", value: "#fffefc", default: true },
    { name: "header", value: "#e6e4e1" },
    { name: "dark", value: "#424242" }
  ])
);

const req = require.context("../src", true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
