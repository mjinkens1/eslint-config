const { cloneDeep, isArray, mergeWith, sortBy, uniq } = require('lodash');

const mergeConfigArrays = (objValue, srcValue) => {
  if (isArray(objValue)) {
    const sorted = sortBy(objValue.concat(srcValue), item => {
      return srcValue.indexOf(item);
    });
    return uniq(sorted);
  }
};

module.exports = {
  mergeConfigs: (config, newConfig) => {
    return mergeWith(cloneDeep(config), newConfig, mergeConfigArrays);
  },
};
