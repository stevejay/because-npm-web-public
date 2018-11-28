const { compose } = require("react-app-rewired");
const rewireLodash = require("react-app-rewire-lodash");
// TODO Remove "react-app-rewire-emotion
// const { rewireEmotion } = require("react-app-rewire-emotion");

// module.exports = function override(config, env) {
//   config = rewireLodash(config, env, { id: ["lodash", "recompact"] });
//   config = rewireEmotion(config, env, { extractStatic: true, sourceMap: true });
//   return config;
// };

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
