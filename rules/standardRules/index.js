const standardRules = {
  'array-callback-return': 'error',
  complexity: ['error', 10],
  'consistent-return': 'off',
  curly: 'error',
  eqeqeq: 'error',
  indent: 'off',
  'max-depth': ['error', { max: 3 }],
  'max-lines': ['warn', { max: 175 }],
  'max-nested-callbacks': ['error', { max: 4 }],
  'max-statements-per-line': ['error', { max: 1 }],
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-eval': 'error',
  'no-param-reassign': [
    'error',
    { props: true, ignorePropertyModificationsFor: ['draft'] },
  ],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'no-return-assign': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
};

module.exports = standardRules;
