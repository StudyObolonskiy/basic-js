const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformed = [];
  if (arr.length == 0) {
    return transformed;
  }
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an Array')
  }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-prev':
        if (i == 0 || arr[i - 2] == '--discard-next') {
          break;
        }
        transformed.push(arr[i - 1]);
        break;
      case '--discard-prev':
        if (i == 0 || arr[i - 2] == '--discard-next') {
          break;
        }
        transformed.pop();
        break;
      case '--double-next':
          if (i == arr.length -1) {
              break;
          }
        transformed.push(arr[i + 1]);
        break;
      case '--discard-next':
        i++;
        break;
      default: transformed.push(arr[i]);
    }
  };
  return transformed;
};
