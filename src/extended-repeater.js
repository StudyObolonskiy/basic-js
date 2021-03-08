const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let transformString = [];
  let subString = [];
  let example = String(str);
  let additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator;
  let addition = (options.addition === undefined) ? '' : String(options.addition);
  let repeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
  let separator = (options.separator === undefined) ? '+' : options.separator
  let additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes
  
  for (let i = 0; i < additionRepeatTimes; i++) {
    subString.push(addition);
    subString.push(additionSeparator)
  }
  subString.pop();

  for (let i = 0; i < repeatTimes; i++) {
      transformString.push(example);
      if (addition != '') {
        transformString.push(subString.join(''));
      }
      transformString.push(separator)
  }
  transformString.pop();
  return transformString.join('');
};
  