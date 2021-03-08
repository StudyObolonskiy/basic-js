const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length == 0 || !Array.isArray(members)) {
    return false;
  }
  let firstLater = members.map((e)=> {
    if (typeof e == 'string') {
      e = e.trim().toUpperCase();
      return e[0];
    }
  });
  return firstLater.sort().join('');
};
