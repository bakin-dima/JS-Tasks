const CustomError = require("../extensions/custom-error");

const chainMaker = {
  tempChain: [],
  getLength() {
    return this.tempChain.length;
  },
  addLink(value) {
    typeof value === "undefined"
      ? this.tempChain.push(`( )`)
      : this.tempChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.tempChain[position] == undefined) {
      this.tempChain = [];
      throw CustomError("Not implemented");
    } else this.tempChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.tempChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.tempChain.join("~~");
    this.tempChain = [];
    return result;
  },
};

module.exports = chainMaker;
