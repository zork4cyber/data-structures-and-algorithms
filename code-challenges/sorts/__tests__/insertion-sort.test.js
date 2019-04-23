'use strict';

const insertionSort = require('../insertion-sort.js');

describe('Insertion Sort:', () => {
  
  it('A randomly generated unsorted array returns the array sorted', () => {
    let unsortArr = [2,8,5,9,3];
    let sortedArr = [2,3,5,8,9];
    expect(insertionSort(unsortArr)).toEqual(sortedArr);
  });

  it('A sorted array returns the same sorted array', () => {
    let sortedArr = [2,3,5,8,9];
    expect(insertionSort(sortedArr)).toEqual(sortedArr);
  });

  it('A backwards-sorted array returns the array sorted', () => {
    let backwardsArr = [9,8,5,3,2];
    let sortedArr = [2,3,5,8,9];
    expect(insertionSort(backwardsArr)).toEqual(sortedArr);
  });

  it('An empty array returns the same empty array', () => {
    let arr = [];
    expect(insertionSort(arr)).toEqual(arr);
  });

  it('An array of one element returns the same single-element array', () => {
    let arr = [2];
    expect(insertionSort(arr)).toEqual(arr);
  });

});