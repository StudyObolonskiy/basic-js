const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    let link = `( ${value} )`;
    if (arguments.length == 0) {
      link ='( )';
    }
    this.links.push(link);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.links.length && typeof position == 'number') {
      delPosition = position - 1;
      this.links.splice(delPosition, 1);
      return this;
    } 
    this.links = [];
    throw new Error("Invalid position");
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let chain = this.links.join('~~');
    this.links = [];
    return chain;
  }
};

module.exports = chainMaker;
