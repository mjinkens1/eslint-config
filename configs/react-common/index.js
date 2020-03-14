const imports = require('../../rules/defs/imports');
const itemize = require('../../rules/defs/itemize');
const jest = require('../../rules/defs/jest');
const prettier = require('../../rules/defs/prettier');
const react = require('../../rules/defs/react');
const reactHooks = require('../../rules/defs/reactHooks');
const standard = require('../../rules/defs/standard');

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
