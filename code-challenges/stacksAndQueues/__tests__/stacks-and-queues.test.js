'use strict';

const { Stack, Queue } = require('../stacks-and-queues.js');

// let Stack = require('../stacks-and-queues.js');
// let Stack = new Stack(stack);
// let Queue = require()

describe('Class Stack', () => {

  let val = 1;
  let val1 = 2;
  let val2 = 3;

  it('Can sucessfuly `create` an empty stack', () => {
    let newStack = new Stack();
    expect(newStack).toBeDefined();
  });
  it('Can sucessfuly `push` a node onto an empty stack', () => {
    let newStack = new Stack();
    let val = 1;
    newStack.push(val);
    expect(newStack.top.value).toBe(val);
  });
  it('Can successfully `push` multiple nodes onto a stack', () => {
    let newStack = new Stack();
    newStack.push(val);
    newStack.push(val1);
    newStack.push(val2);
    expect(newStack.top.value).toBe(val2);
    expect(newStack.top.next.value).toBe(val1);
    expect(newStack.top.next.next.value).toBe(val);
  });
  xit('Can successfully `pop` off the stack', () => {
    let newStack = new Stack();
    newStack.push(val);
    newStack.push(val1);
    newStack.push(val2);
    expect(newStack.top.value).toBe(val2);
    newStack.pop();
    expect(newStack.top.value).toBe(val1);
  });

  xit('Can successfully empty a stack after multiple `pop`s', () => {
    let newStack = new Stack();
    newStack.push(val);
    newStack.push(val1);
    newStack.push(val2);

  });
  it('Can successfully `peek` the next item on the stack', () => {
    let newStack = new Stack();
    newStack.push(val);
    expect(newStack.peek()).toBe(val);
  });
});


describe('Class Queue', () => {
  let val = 'a';
  let val1 = 'b';
  let val2 = 'c';
  it('Can sucessfuly `create` an empty queue', () => {
    let kue = new Queue();
    expect(kue).toBeDefined();
  });
  it('Can successfully enqueue onto a queue', () => {
    let kue = new Queue();
    kue.enqueue(val);
    expect(kue.rear.value).toBe(val);
  });
  it('Can successfully `enqueue` multiple nodes into a queue', () => {
    let kue = new Queue();
    kue.enqueue(val);
    expect(kue.rear.value).toBe(val);
    kue.enqueue(val1);
    expect(kue.rear.value).toBe(val1);
    kue.enqueue(val2);
    expect(kue.rear.value).toBe(val2);
  });
  xit('Can successfully `dequeue` off a queue', () => {
    let kue = new Queue();
    kue.enqueue(val);
    kue.enqueue(val1);
    expect(kue.rear.value).toBe(val1);
    kue.dequeue();
    expect(kue.rear.value).toBe(val1);
  });
  it('Can successfully `peek` into a queue', () => {
    let kue = new Queue();
    kue.enqueue(val);
    expect(kue.rear.value).toBe(val);
    expect(kue.peek()).toBe(val);
  });
  xit('Can successfully empty a queue after multiple dequeues', () => {
    let kue = new Queue();
    kue.enqueue(val);
    kue.enqueue(val1);
    kue.enqueue(val2);
    expect(kue.rear.value).toBe(val2);
    kue.dequeue();
    kue.dequeue();
    kue.dequeue();
    expect(kue.rear).toBeNull();

  });
});