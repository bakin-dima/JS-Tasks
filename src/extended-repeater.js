module.exports = function repeater(str, options) {
  let resultStr = "",
  tempStr_1 = "",
  tempStr_2 = "";
  
  options.separator ? options.separator : options.separator = '+';
  options.additionSeparator ? options.additionSeparator : options.additionSeparator = '|';
  options.repeatTimes == undefined ? options.repeatTimes = 1 : options.repeatTimes;
  options.additionRepeatTimes == undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  options.addition === null ? options.addition = "null" : null;
  options.addition == undefined ? options.addition = "" : null;


  
for (let i = 1; i < options.additionRepeatTimes; i++) {
      tempStr_1 += options.addition + options.additionSeparator;
  }
  tempStr_1 += options.addition;
  tempStr_2 = str + tempStr_1 + options.separator;
  resultStr = tempStr_2.repeat(options.repeatTimes -1) + str + tempStr_1;
    
    return resultStr;
    
};