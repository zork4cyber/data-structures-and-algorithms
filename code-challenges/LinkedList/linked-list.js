// 'use strict';

// class Node {
//   constructor(value) {
//     this.value = value,
//     this.next = null;
//   };

//   printNode() {
//     console.log('printNode(): ', this.value);
//     return this.value.toString();
//   };

// };

// let node = new Node(1);
// node.printNode();

// class LinkedList {
//   constructor() {
//     this.head = null;
//   };

//   prepend(value) {
//     let newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     console.log(this.head);
//     return this.head;
//   };

//   includes(value) {
//     let currentNode = this.head;
//     let isInList = false;
//     if(currentNode.value === value) {
//       isInList = true;
//     };
//     console.log('currentNode:',currentNode);
//     console.log('before while loop');
//     while(currentNode !== null) {
//       console.log('currentNode: ', currentNode);
//       if(currentNode.value === value) {
//         isInList = true;
//       };
//       currentNode = currentNode.next;
//     };
//     return isInList;
//   };

//   print() {
//     let currentNode = this.head;
//     let str = '';
//     if(currentNode === null) {
//       return '';//If the list is empty  ie. if the current head of the list exists but has
//                          //no value, then the value is null and that is returned instead
//     }
//     while (currentNode !== null) {
//       console.log('print(): ', currentNode.value);
//       str += `${currentNode.printNode()} `;
      
//       currentNode = currentNode.next;
//     };
//     return str;
//   };

// };
// let list = new LinkedList();

// //WROTE TESTS HERE BECAUSE I COULDN"T FIGOURE OUT HOW TO FIX THE EXPORT/IMPORT ERROR
// //typeError: cannot read property 'cwd' of undefined

// //tests to bring back a list of a linked list with no values
// console.log('list:', list);//prints the number of nodes in the list
// console.log('print: ', list.print());//will print and empty space because there's a list but no values in

// // //tests to prepend new value to the front of the linked list ie. the new head of the linked list 
// list.prepend(12);//will append 12 to the head of the list
// list.prepend(34);//will apprent 34 as the new head of the list
// console.log('new list print: ', list.print());//will print the new list with spaces included

// //tests to see if linked list includes values set at 12, 34, and 80
// console.log('list.includes..?',list.includes(12));//will be true
// console.log('list.includes..?: ', list.includes(34));//will be true
// console.log('list.includes..?: ', list.includes(80));//will be false

// // module.exports = {Node, LinkedList};


'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  includes(value) {
    let currentNode = this.head;
    let isInList = false;
    if(currentNode.value === value) {
      isInList = true;
    }
    console.log('currentNode:',currentNode);
    console.log('before while loop');
    while(currentNode !== null) {
      console.log('currentNode: ', currentNode);
      if(currentNode.value === value) {
        isInList = true;
      }
      currentNode = currentNode.next;
    }
    return isInList;
  }

  print() {
    let output = [];
    let current = this.head;
    while(current) {
      output.push(current.value);
      current = current.next;
    }
    console.log(output.joing('->'));
  }

  kthFromEnd(k) {
    let leadRef = this.head;
    for(let i in k) {
      leadRef = leadRef.next;
      if(leadRef === null){
        return false;
      }
    }
    let tailRef = this.head;
    while(leadRef.next != null) {
      leadRef = leadRef.next;
      tailRef = tailRef.next;
    }
    return tailRef.value;
  }
}



module.exports = LinkedList;