// Overrides
const importOverrides = require('./overrides/import');
const serviceWorkerOverrides = require('./overrides/serviceWorker');
const testOverrides = require('./overrides/tests');
const testUtilsOverrides = require('./overrides/testUtils');

// Rules
const importRules = require('./rules/import');
const jestRules = require('./rules/jest');
const prettierRules = require('./rules/prettier');
const reactRules = require('./rules/react');
const reactHooksRules = require('./rules/reactHooks');
const standardRules = require('./rules/standard');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['jest', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
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
