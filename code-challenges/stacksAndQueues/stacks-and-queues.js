// 'use strict';

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//     this.stack = [];
//     this.top = null;
//   }

//   push(value){
//     // Create a new Node
//     let node = new Node(value);
//     // Set new node.next to be the top of stack
//     node.next = this.top;
//     // new top of stack is now created node
//     this.top = node;
//     // push node onto stack
//     this.stack.push(node);
//   }

//   pop() { 
//     // return top node in the stack and remove it from the stack 
//     if (this.stack.length === 0) 
//       return null; 
//     return this.stack.pop(); 
//   } 

//   peek(){ 
//     // returns the top node but doesn't pop it
//     return this.items[this.items.length - 1]; 
//   } 

// }

// class Queue {
//   constructor(value){
//     this.queue = [];
//     this.front = null;
//   }

//   enqueue(value){
//     // Create a new Node
//     let node = new Node(value);
//     // Set new node.next to be the front of the queue
//     node.next = this.front;
//     // new font of queue is now created node
//     this.top = node;
//     // push node onto queue
//     this.queue.push(node);
//   }

//   dequeue() { 
//     if(this.queue.isEmpty()) 
//       return null; 
//     return this.queue.shift(); 
//   } 

//   front() {
//     if(this.queue.isEmpty()) 
//       return 'Nothing in the Queue'; 
//     return this.queue[0]; 
//   }
// }


// module.exports = { Node, Stack, Queue };

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