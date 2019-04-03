'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('FIFO Animal Shelter', () => {
  it('can create a new empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.front).toBeNull();
    expect(shelter.back).toBeNull();
  });

  it('can enqueue an animal to the shelter', () => {
    const shelter = new AnimalShelter();
    let animal = 'cat';
    shelter.enqueue(animal);
    expect(shelter.front.animal).toBe(animal);
  });

  it('can enqueue multiple animals to the shelter', () => {
    const shelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'cat';
    let animal3 = 'dog';
    shelter.enqueue(animal1);
    shelter.enqueue(animal2);
    shelter.enqueue(animal3);
    expect(shelter.front.animal).toBe(animal1);
    expect(shelter.front.next.animal).toBe(animal2);
    expect(shelter.back.animal).toBe(animal3);
  });
  
  it('can only enqueue dogs and cats to the shelter', () => {
    const shelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'lizard';
    let animal3 = 'dog';
    shelter.enqueue(animal1);
    shelter.enqueue(animal2);
    shelter.enqueue(animal3);
    expect(shelter.front.animal).toBe(animal1);
    expect(shelter.front.next.animal).toBe(animal3);
  });

  it('can dequeue an animal from the shelter', () => {
    const shelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'dog';
    let animal3 = 'dog';
    shelter.enqueue(animal1);
    shelter.enqueue(animal2);
    shelter.enqueue(animal3);
    expect(shelter.dequeue('cat')).toBe(animal1);
    expect(shelter.front.animal).toBe(animal2);
    expect(shelter.back.animal).toBe(animal3);
  });

  it('can dequeue multiple animals from the shelter', () => {
    const shelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'cat';
    let animal3 = 'dog';
    let animal4 = 'dog';
    shelter.enqueue(animal1);
    shelter.enqueue(animal2);
    shelter.enqueue(animal3);
    shelter.enqueue(animal4);
    expect(shelter.dequeue('cat')).toBe(animal1);
    expect(shelter.dequeue('cat')).toBe(animal2);
    expect(shelter.dequeue('dog')).toBe(animal3);
    expect(shelter.dequeue('dog')).toBe(animal4);
  });

  it('will dequeue the animal who\'s waited longest if no preference is given', () => {
    const shelter = new AnimalShelter();
    let animal1 = 'cat';
    let animal2 = 'cat';
    let animal3 = 'dog';
    let animal4 = 'dog';
    shelter.enqueue(animal1);
    shelter.enqueue(animal2);
    shelter.enqueue(animal3);
    shelter.enqueue(animal4);
    expect(shelter.dequeue()).toBe(animal1);
  });
});