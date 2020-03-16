const imports = require('../../rules/imports');
const itemize = require('../../rules/itemize');
const jest = require('../../rules/jest');
const prettier = require('../../rules/prettier');
const react = require('../../rules/react');
const reactHooks = require('../../rules/reactHooks');
const standard = require('../../rules/standard');

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
    ...imports,
    ...itemize,
    ...jest,
    ...prettier,
    ...react,
    ...reactHooks,
    ...standard,
  },
  overrides: [
    {
      files: [
        '**/components/index.js',
        '**/redux-modules/index.js',
        '**/mockData/index.js',
      ],
      rules: { 'import/prefer-default-export': 'off' },
    },
    {
      files: ['*.test.js', '**/__tests__/*'],
      rules: {
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
      },
    },
    {
      files: ['setupTests.js', 'src/testUtils/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
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
