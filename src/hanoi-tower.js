const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = {};
  hanoi.turns = 2**disksNumber - 1;
  hanoi.seconds = Math.floor(hanoi.turns / (turnsSpeed / 3600));
  return hanoi;
};
