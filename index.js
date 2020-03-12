// Overrides
const importOverrides = require('./overrides/importOverrides');
const serviceWorkerOverrides = require('./overrides/serviceWorkerOverrides');
const testOverrides = require('./overrides/testOverrides');
const testUtilsOverrides = require('./overrides/testUtilsOverrides');

// Rules
const importRules = require('./rules/importRules');
const jestRules = require('./rules/jestRules');
const prettierRules = require('./rules/prettierRules');
const reactRules = require('./rules/reactRules');
const reactHooksRules = require('./rules/reactHooksRules');
const shopifyRules = require('./rules/shopifyRules');
const standardRules = require('./rules/standardRules');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['jest', 'jsx-a11y', 'prettier', 'react', 'react-hooks', 'shopify'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...importRules,
    ...jestRules,
    ...prettierRules,
    ...reactRules,
    ...reactHooksRules,
    ...shopifyRules,
    ...standardRules,
  },
  overrides: [
    importOverrides,
    serviceWorkerOverrides,
    testOverrides,
    testUtilsOverrides,
  ],
  globals: {
    __DEV__: true,
    global: 'writeable',
    setImmediate: 'readonly',
    process: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        paths: ['src'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
