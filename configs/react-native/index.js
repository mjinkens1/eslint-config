// Common Config
const commonConfig = require("../react-common");

// Utils
const { mergeConfigs } = require("../../utils");

const reactNativeConfig = {
  extends: ["@react-native-community"]
};

module.exports = mergeConfigs(commonConfig, reactNativeConfig);
