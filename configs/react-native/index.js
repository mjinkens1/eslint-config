// Common Config
const commonConfig = require('../react-common');

// Utils
const { mergeConfigs } = require('../../utils');

const reactNativeConfig = {
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['App'],
      },
    },
  },
};

module.exports = mergeConfigs(commonConfig, reactNativeConfig);
