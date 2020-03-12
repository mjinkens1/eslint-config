const importOverrides = {
  files: [
    '**/components/index.js',
    '**/redux-modules/index.js',
    '**/mockData/index.js',
  ],
  rules: { 'import/prefer-default-export': 'off' },
};

module.exports = importOverrides;
