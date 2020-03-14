// Common Config
const commonConfig = require("../react-common");

// Utils
const { mergeConfigs } = require("../../utils");

const webConfig = {
  overrides: [
    {
      files: ["serviceWorker.js"],
      rules: {
        "no-param-reassign": "off",
        "no-console": "off",
        "no-use-before-define": "off",
        "@itemizecorp/react/prefer-early-return": "off"
      }
    }
  ]
};

module.exports = mergeConfigs(commonConfig, webConfig);
