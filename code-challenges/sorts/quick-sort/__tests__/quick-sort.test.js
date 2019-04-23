'use strict';

const QuickSort = require('../quick-sort.js');

describe('Quick Sort:', () => {

  it('A randomly generated unsorted array returns the array sorted', () => {
    let unsortedArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
    let sortedArray = [1, 2, 2, 3, 3, 3, 5, 6, 7, 8];
    expect(QuickSort(unsortedArray,0,unsortedArray.length -1)).toEqual(sortedArray);
  });

  it('A sorted array returns the same sorted array', () => {
    let sortedArr = [2,3,5,8,9];
    expect(QuickSort(sortedArr)).toEqual(sortedArr);
  });

  it('A backwards-sorted array returns the array sorted', () => {
    let backwardsArr = [9,8,5,3,2];
    let sortedArr = [2,3,5,8,9];
    expect(QuickSort(backwardsArr,0,backwardsArr.length - 1)).toEqual(sortedArr);
  });

  it('An empty array returns the same empty array', () => {
    let arr = [];
    expect(QuickSort(arr)).toEqual(arr);
  });

  it('An array of one element returns the same single-element array', () => {
    let arr = [2];
    expect(QuickSort(arr)).toEqual(arr);
  });

});