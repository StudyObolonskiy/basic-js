const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix || matrix.length == 0) {
    return 0
  }
  let counter = 0
  matrix.forEach((e)=> {
    e.filter((value) => {
      if (value == '^^') {
        counter++;
      }
    });
  });
  return counter;
};
