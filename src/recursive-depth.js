const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let counter = 0;
    arr.forEach((e)=> {
      let current = this.calculateDepth(e)
      if (counter < current) {
        counter = current;
      }
    });
    return counter + 1
  }
};