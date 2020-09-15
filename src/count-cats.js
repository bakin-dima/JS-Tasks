const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
    // Solution #1
    /*
    for (let i=0; i < matrix.length; i++){
      for (let j=0; j< matrix[i].length; j++){
        if (matrix[i][j] === "^^" ) count++;
      }
    }*/
    // Solution #2
  
  matrix.forEach (element => element.forEach( x => count+= x == "^^"));
  return count;
};
