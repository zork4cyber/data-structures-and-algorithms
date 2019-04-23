'use strict';

const mergeSort = require('../merge-sort.js');

describe('Merge Sort:', () => {

  it('A randomly generated unsorted array returns the array sorted', () => {
    let unsortedArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
    let sortedArray = [1,2,2,3,3,3,5,6,7,8];
    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  });

  it('A sorted array returns the same sorted array', () => {
    let sortedArr = [2,3,5,8,9];
    expect(mergeSort(sortedArr)).toEqual(sortedArr);
  });

  it('A backwards-sorted array returns the array sorted', () => {
    let backwardsArr = [9,8,5,3,2];
    let sortedArr = [2,3,5,8,9];
    expect(mergeSort(backwardsArr)).toEqual(sortedArr);
  });

  it('An empty array returns the same empty array', () => {
    let arr = [];
    expect(mergeSort(arr)).toEqual(arr);
  });

  it('An array of one element returns the same single-element array', () => {
    let arr = [2];
    expect(mergeSort(arr)).toEqual(arr);
  });

});