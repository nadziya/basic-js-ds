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
    const nodule = new Node(data);
    if (!this.rootNode) {
      this.rootNode = nodule;
    } else {
      this.specialNode(this.rootNode, nodule);
    }
  }
  
  specialNode(nod, nodule) {
    if (nodule.data < nod.data) {
      if (nod.left === null) {
        nod.left = nodule;
      } else {
        this.specialNode(nod.left, nodule);
      }
    } else {
      if (nod.right === null) {
        nod.right = nodule;
      } else {
        this.specialNode(nod.right, nodule);
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