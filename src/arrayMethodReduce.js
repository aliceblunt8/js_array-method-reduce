'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let returnValue = initialValue;
    let startIndex = 0;

    if (arguments.length === 0) {
      return;
    }

    if (this.length === 1 && initialValue === undefined) {
      return this[0];
    }

    if (this.length === 0 && initialValue) {
      return initialValue;
    }

    if (arguments.length === 1) {
      startIndex = 1;
      returnValue = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      returnValue = callback(returnValue, this[i], i, this);
    }

    return returnValue;
  };
}

module.exports = applyCustomReduce;
