/*
 *  This file is what will be written into the project by the @itemizecorp/configure-tooling package. We don't want the rule defnitions exposed in the project
 *  so that developers will be less likely to alter the configuration.
 */

module.exports = {
  parser: 'babel-eslint',
  plugins: ['@itemizecorp/react'],
  extends: 'plugin:@itemizecorp/react/react-native',
};
