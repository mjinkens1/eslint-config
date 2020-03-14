const jest = require("../../rules/defs/jest");
const prettier = require("../../rules/defs/prettier");
const standard = require("../../rules/defs/standard");

module.exports = {
  env: {
    es6: true,
    jest: true,
    "jest/globals": true,
    node: true
  },
  parser: "babel-eslint",
  plugins: ["jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    ...jest,
    ...prettier,
    ...standard
  },
  overrides: [],
  globals: {
    setImmediate: "readonly",
    process: "readonly"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};
