'use strict';

// Write a function for insertion sort that takes in an unsorted array and returns the array sorted using insertion sort.

const insertionSort = (arr) => {
  for(let i = 1, j; i < arr.length; i++) {
    let temp = arr[i];
    for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
};

module.exports = insertionSort;