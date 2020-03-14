const { cloneDeep, isArray, mergeWith } = require('lodash');

const mergeConfigArrays = (objValue, srcValue) => {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

module.exports = {
  mergeConfigs: (config, newConfig) => {
    const merged = mergeWith(cloneDeep(config), newConfig, mergeConfigArrays);
    return merged;
  },
};
