# Queues With Stacks

## Challenge
### PsuedoQueue
* Create a brand new `PseudoQueue` class
#### `enqueue(value)` which inserts value into the `PseudoQueue`, using a first-in, first-out approach
#### `dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach

## Approach & Efficiency
* The Stack instances have only `push`, `pop`, and `peek` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

### PseudoQueue
* `enqueue(value)` -> Pushes value onto `Rear` stack
* `dequeue()` -> Removes node from `Front` stack