import {
  configure,
  addDecorator,
  getStorybook,
  setAddon
} from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { withOptions } from "@storybook/addon-options";
import createPercyAddon from "@percy-io/percy-storybook";
import "../src/styles/app.scss";

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

addDecorator(
  withBackgrounds([
    { name: "main", value: "#fffefc", default: true },
    { name: "header", value: "#e6e4e1" },
    { name: "dark", value: "#424242" }
  ])
);

addDecorator(
  withOptions({
    name: "Because NPM",
    url: "",
    goFullScreen: false,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false
  })
);

const req = require.context("../src", true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

serializeStories(getStorybook);
