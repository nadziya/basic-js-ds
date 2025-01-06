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

  has(data) {
    return intoTree(this.rootNode, data);

    function intoTree(nodule, data) {
      let result = 0;
      if (!nodule) {
        return false;
      }
      if (nodule.data === data) {
        return true;
      }
      if (data < nodule.data) {
        result = intoTree(nodule.left, data);
      } else {
        result = intoTree(nodule.right, data);
      }
      return result;
    }
  }

  find(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data);

    function deleteNode(nodule, data) {
      if (!nodule) {
        return null;
      }
      if (data < nodule.data) {
        nodule.left = deleteNode(nodule.left, data);
        return nodule;
      } else if (data > nodule.data) {
        nodule.right = deleteNode(nodule.right, data);
        return nodule;
      } else {
        if (!nodule.right && !nodule.left) {
         return null;
        } else if (!nodule.left) {
          nodule = nodule.right;
          return nodule;
        } else if (!nodule.right) {
          nodule = nodule.left;
          return nodule;
        }
        let minimumRight = nodule.right;
        while (minimumRight.left) {
          minimumRight = minimumRight.left;
        }
        nodule.data = minimumRight.data;
        nodule.right = deleteNode(nodule.right, minimumRight.data);
        return nodule;
      }

    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let nodule = this.rootNode;
    while (nodule.left) {
      nodule = nodule.left;
    }
    return nodule.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let nodule = this.rootNode;
    while (nodule.right) {
      nodule = nodule.right;
    }
    return nodule.data;
  }
}

module.exports = {
  BinarySearchTree
};