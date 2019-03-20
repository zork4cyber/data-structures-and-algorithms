'use strict';

const arrayBinary = require('../array-binary-search.js');

describe('array-binary-search.js test', () => {

  let sortedArray = [1,2,3,4,5];
  let unsortedArray = [1,9,2,8,3,7];

  it('When given a sorted array and search key, it should find the index of the key or return -1', () => {
    expect(arrayBinary.binarySearch(sortedArray,2)).toEqual(1);
  });

  it('Require two arguments', () => {
    expect(arrayBinary.binarySearch(9)).toBeNull();
  });
  it('Requires first param to be an array', () => {
    expect(arrayBinary.binarySearch(9,sortedArray)).toBeNull();
    expect(arrayBinary.binarySearch('hi',sortedArray)).toBeNull();
    expect(arrayBinary.binarySearch({},sortedArray)).toBeNull();
    expect(arrayBinary.binarySearch(null,sortedArray)).toBeNull();
    expect(arrayBinary.binarySearch(undefined,sortedArray)).toBeNull();
    expect(arrayBinary.binarySearch(NaN,sortedArray)).toBeNull();
  });
  it('Requires a sorted array', () => {
    expect(arrayBinary.binarySearch(unsortedArray,3)).toBeNull();
  });
  it('Requires array and value to be interger', () => {
    expect(arrayBinary.binarySearch(['a','b','c','d','e'],null)).toBeNull();
  });

});
