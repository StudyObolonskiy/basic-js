const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (reverse) {
    this.reverse = reverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('No arguments');
    }
    let message = str.toUpperCase().split('')
    let cipherKey = key.toUpperCase();
    let result = [];
    let plainText = []
    message.forEach((e)=> {
      plainText.push(e)
      if (e.charCodeAt(0) < 65 || e.charCodeAt(0) > 90) {
        plainText.pop()
      }
    });
    for (let i = 0; i < plainText.length; i++) {
      let cIndex = (this.alphabet.indexOf(plainText[i]) + this.alphabet.indexOf(cipherKey[i % cipherKey.length])) % this.alphabet.length;
      result.push(this.alphabet[cIndex]);
    }
    message.forEach((e, i)=> {
      if (e.charCodeAt(0) < 65 || e.charCodeAt(0) > 90) {
        result.splice(i, 0, e)
      }
    });
    if (this.reverse === false) {
      return result.reverse().join('')
    }
      return result.join('')
  }    
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('No arguments');
    }
    let encryptText = str.toUpperCase().split('')
    let cipherKey = key.toUpperCase();
    let result = [];
    let plainText = []
    encryptText.forEach((e)=> {
      plainText.push(e)
      if (e.charCodeAt(0) < 65 || e.charCodeAt(0) > 90) {
        plainText.pop()
      }
    });
    for (let i = 0; i < plainText.length; i++) {
      let cIndex = (this.alphabet.indexOf(plainText[i]) + this.alphabet.length - this.alphabet.indexOf(cipherKey[i % cipherKey.length])) % this.alphabet.length;
      result.push(this.alphabet[cIndex]);
    }
    encryptText.forEach((e, i)=> {
      if (e.charCodeAt(0) < 65 || e.charCodeAt(0) > 90) {
        result.splice(i, 0, e)
      }
    });
    if (this.reverse === false) {
      return result.reverse().join('')
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
