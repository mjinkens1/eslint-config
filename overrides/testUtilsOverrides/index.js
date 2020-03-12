const testUtilsOverrides = {
  files: ['setupTests.js', 'src/testUtils/**/*.js'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};

module.exports = testUtilsOverrides;
