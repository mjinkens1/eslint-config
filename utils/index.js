const { cloneDeep, isArray, mergeWith } = require('lodash');

const mergeConfigArrays = (objValue, srcValue) => {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

module.exports = {
  mergeConfigs: (config, newConfig) => {
    return mergeWith(cloneDeep(config), newConfig, mergeConfigArrays);
  },
};
