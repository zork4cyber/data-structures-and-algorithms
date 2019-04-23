'use strict';

// Write a function for insertion sort that takes in an unsorted array and returns the array sorted using insertion sort.

function insertionSort(arr) {
  for(let i = 0, j; i < arr.arrlength; i++){
    let temp = arr[i];
    for(let j = i -1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}

let oneArr = [1];
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(insertionSort(list));
console.log(insertionSort(oneArr));

module.exports = insertionSort;