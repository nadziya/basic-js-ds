const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.specialNode(this.rootNode, newNode);
    }
  }
  
  specialNode(nod, newNode) {
    if (newNode.data < nod.data) {
      if (nod.left === null) {
        nod.left = newNode;
      } else {
        this.specialNode(nod.left, newNode);
      }
    } else {
      if (nod.right === null) {
        nod.right = newNode;
      } else {
        this.specialNode(nod.right, newNode);
      }
    }
  }

  root() {
    return this.rootNode;
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};