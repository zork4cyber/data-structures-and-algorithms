'use strict';

import { notDeepEqual } from 'assert';

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  // Algorithm Preorder(tree)
  //  1. Visit the root.
  //  2. Traverse the left subtree, i.e., call Preorder(left-subtree)
  //  3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
  preorder(node, data) {
    data = [];

    data.push(node.value);

    if(node.leftChild) { this.preorder(node.leftChild, data); }

    if(node.rightChild) { this. preorder(node.rightChild, data); }

    return data;
  }

  breadth_first(node) {
    let queue = [node];
    while(queue.length != 0) {
      queue.unshift();
      if(node.left) {
        queue.shift(node.left);
        console.log(node.left.value);
      }
      if(node.right) {
        queue.shift(node.right);
        console.log(node.right.value);
      }
    }

  }
}

class BinarySearchTree {

  add(value){
    var node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    if (this.root.value < value) {
      this.root.rightChild = new Node(value);
    } else {
      this.root.leftChild = new Node(value);
    }
  }

  contains(value) {
    if(!value) { return false; }
    let node = this.root;

    if(value === node.value) { return true; }

    if(value > node.value) { node = node.rightChild; this.contains(node.rightChild); }

    if(value < node.value) { node = node.leftChild; this.contains(node.leftChild ); }
  }
}

let bts = new BinarySearchTree();
bts.add(1);
bts.add(2);

console.log(bts);

module.exports = BinaryTree, BinarySearchTree;