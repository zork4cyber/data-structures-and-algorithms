# Stacks and Queues

## Challenge
### Node
* Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.
### Stack
#### Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to `top` when the stack is created.
* Define a method called `push` which takes any value as an argument and adds a new node with that value to the `top` of the stack with an O(1) Time performance.
* Define a method called `pop` that does not take any argument, removes the node from the `top` of the stack, and returns the node’s value.
* Define a method called `peek` that does not take an argument and returns the value of the node located on the `top` of the stack.
### Queue
#### Create a Queue class that has a `front` property. It creates an empty queue when instantiated.
* This object should be aware of a default empty value assigned to `front` when the queue is created.
* Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the `back` of the queue with an O(1) Time performance.
* Define a method called `dequeue` that does not take any argument, removes the node from the `front` of the queue, and returns the node’s value.
* Define a method called `peek` that does not take an argument and returns the value of the node located in the `front` of the stack.

## Approach & Efficiency
### Node
* The Node class is a copy from `Linked List`

### Stack
* `Push` Takes in a value, creates a new `Node`, and pushes it to the `Top` of the stack. This method has a time efficiency of O(1) and a space efficiency of O(1).
* `Pop` Takes a stack and removes the `Top Node`. This method has a time efficiency of O(1) and a space efficiency of O(1).
* `Peek` Returns the `Top Node` from a stack without removing it. This method has a time efficiency of O(1) and a space efficiency of O(1).

### Queue
* `Enqueue` Takes in a value, creates a new `Node`, and pushes it to the `Front` of the queue. This method has a time efficiency of O(1) and a space efficiency of O(1).
* `Dequeue` Takes a stack and removes the `Front Node`. This method has a time efficiency of O(n) and a space efficiency of O(1).
* `Peek` Returns the `Front Node` from a stack without removing it. This method has a time efficiency of O(1) and a space efficiency of O(1).

## API
### Stack
* `push(value)` -> Pushes node onto `Top` of stack
* `pop()` -> Removes node from `Top` of stack
* `peek()` -> Returns node from `Top` of stack with removing node
### Queue
* `enqueue(value)` -> Pushes node onto `Front` of stack
* `dequeue()` -> Removes node from `Front` of stack
* `peek()` -> Returns node from `Front` of stack with removing the node