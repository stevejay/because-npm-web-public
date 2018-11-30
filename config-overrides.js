const { compose } = require("react-app-rewired");
const rewireLodash = require("react-app-rewire-lodash");

module.exports = {
  jest: config => {
    config = require("react-app-rewire-css-modules-extensionless").jest(config);
    return config;
  },
  webpack: (config, env) => {
    config = require("react-app-rewire-css-modules-extensionless").webpack(
      config,
      env,
      {
        /* options */
      }
    );
    config = rewireLodash(config, env, { id: ["lodash", "recompact"] });
    return config;
  }
};
