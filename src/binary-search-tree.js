const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }
  add(data) {
    this.rootNode = this._addNode(this.rootNode, data);
  }
  _addNode(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }
    return node;
  }
  has(data) {
    return this._hasNode(this.rootNode, data);
  }
  _hasNode(node, data) {
    if (!node) {
      return false;
    }
    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._hasNode(node.left, data);
    } else {
      return this._hasNode(node.right, data);
    }
  }
  find(data) {
    return this._findNode(this.rootNode, data);
  }
  _findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }
  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }
  _removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      node.data = this._findMin(node.right).data;
      node.right = this._removeNode(node.right, node.data);
    }
    return node;
  }
  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    return this._findMin(this.rootNode).data;
  }
  max() {
    if (!this.rootNode) {
      return null;
    }
    return this._findMax(this.rootNode).data;
  }
  _findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
