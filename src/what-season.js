const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  return !date
    ? "Unable to determine the time of year!"
    : isNaN(date.getYear())
    ? new Error()
    : date.getMonth() <= 1 || date.getMonth() == 11
    ? "winter"
    : date.getMonth() >= 2 && date.getMonth() <= 4
    ? "spring"
    : date.getMonth() >= 5 && date.getMonth() <= 7
    ? "summer"
    : date.getMonth() >= 8 && date.getMonth() <= 10
    ? "fall"
    : false;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
