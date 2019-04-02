'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js');


class PseudoQueue {
  constructor(){
    this.back = new Stack();
    this.front = new Stack();
  }
  enqueue(value) {
    this.back.push(value);
    while (this.back.top) {
      let current = this.temp.pop();
      this.front.push(current);
    }
  }
  dequeue() {
    if (this.front.top){
      return this.front.pop();
    }
    return null;
  }
}

module.exports = PseudoQueue;

