const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 /HALF_LIFE_PERIOD;
  const sampleNum = parseFloat(sampleActivity)
  if (!sampleActivity || typeof sampleActivity != 'string' || sampleNum <= 0 || sampleNum > 15 || isNaN(sampleNum)) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleNum) / k);
};
