'use strict';

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(animal) {
    if (!animal) {return null;}

    // Make sure animal is 'dog' or 'cat'
    if (animal != 'dog' && animal != 'cat') return `Can only put cats  and dogs in shelter`;

    // Create animal
    animal = {animal, next: null};

    // Adding animal to empty shelter(queue)
    if (!this.front){
      this.front = animal;
      this.back = animal;
      return this.front;
    }

    // Adding animal to not empty shelter(queue)
    if (this.front) {
      this.back.next = animal;
      this.back = animal;
      return this.front;
    }
  }

  dequeue(pref) {
    // Check if pref, if no then return animal in front and then set front.next to next animal(FIFO)
    if (!pref) {
      let longest = this.front;
      this.front = this.front.next;
      return longest.animal;
    } 

    // check to see if pref is dog or cat
    if (pref != 'dog' && pref != 'cat') return `Choose either dog or cat`;

    // Check if front is equal to pref, if yes then set front.next to next animal and return the original front
    if (pref === this.front.animal) {
      let longest = this.front;
      this.front = this.front.next;
      return longest.animal;
    }

    // set temp to front to save it
    let temp = this.front;
    // while the next animal is not pref
    while (temp.next.animal !== pref) {
      temp.animal;
      temp = temp.next;
    }
    // if there is no next animal, then return no prefs
    if (!temp.next.anmial) return `No ${pref} in shelter`;
    let longest = temp.next;
    temp.next = longest.next;
    return longest.animal;
  }
}

let a = new AnimalShelter();
console.log(a.enqueue('dog'));
console.log(a.enqueue('cat'));
console.log(a.enqueue('dog'));
console.log(a.dequeue());
console.log(a);
module.exports = AnimalShelter;