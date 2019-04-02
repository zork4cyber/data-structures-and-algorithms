'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value); // Create a new Node
    node.next = this.top; // Set new node.next to be the top of stack and null
    this.top = node; // new top of stack is now created node
  }

  pop() {

  }


  peek() {
    if (this.top) {
      return this.top.value;
    }
    return null;
  }
}


class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }


  enqueue(value) {
    let node = new Node(value);
    node.next = this.rear;
    this.rear = node;
    // If Queue is empty then the node is both front and rear
    if (!this.front) {
      this.front = node;
    }
  }


  dequeue() {
  }


  peek() {
    // If there is not front node then return null
    if (!this.front) {
      return null;
    }
    //if there is a front node then return that
    if (this.front) {
      return this.front.data;
    }
  }
}

module.exports = { Node, Stack, Queue };
