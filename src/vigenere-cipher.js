class VigenereCipheringMachine {
  reverse = true;
  constructor(status) {
    if (status === false) this.reverse = false;
  }
  encrypt(message, key) {
    if ((message, key === undefined)) throw new Error();
    const tempMessage = message.toUpperCase(),
    tempKey = key.toUpperCase();
    let result = "";
    for (let i = 0, j = 0; i <= tempMessage.length  -1 ; i++) {
      if (tempMessage[i].charCodeAt() < 65 || tempMessage[i].charCodeAt() > 90) {
        result += tempMessage[i];
        continue;
      }
      result += String.fromCharCode(((tempMessage[i].charCodeAt() + tempKey[j].charCodeAt() - 130) % 26) + 65);
      j++;
      j % tempKey.length === 0 ?  j = 0: j;
      
    }
    return this.reverse === true ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if ((message, key === undefined)) throw new Error();
    let result = "";
    const tempKey = key.toUpperCase();
    for (let i = 0, j = 0; i <= message.length - 1; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        result += message[i];
        continue;
      }
      result += String.fromCharCode(((message[i].charCodeAt() - tempKey[j].charCodeAt() + 26) % 26) + 65);
      j++;
      j % tempKey.length === 0 ?  j = 0: j;
      
    }
    return this.reverse === true ? result : result.split("").reverse().join("");
  }
}
module.exports = VigenereCipheringMachine;
