'use strict';

const tree = require('../tree/tree.js');

function fizzBuzzTree(tree){
  let node = tree.root;
  if(node.value % 15 === 0) { node.value = 'fizzbuzz'; }
  if(node.value % 3 === 0) { node.value = 'fizz'; }
  if(node.value % 5 === 0) { node.value = 'buzz'; }
  if(node.left != null) { node = node.left;}
  if(node.right != null) { node = node.right;}
}

module.exports = fizzBuzzTree;