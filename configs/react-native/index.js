// Common Config
const commonConfig = require('../react-common');

// Utils
const { mergeConfigs } = require('../../utils');

const reactNativeConfig = {
  extends: ['@react-native-community'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['App'],
      },
    },
  },
};

module.exports = mergeConfigs(commonConfig, reactNativeConfig);
