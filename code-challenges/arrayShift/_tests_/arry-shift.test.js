'use strict';

const arrayShift = require('../array-shift.js');

describe('array-shift.js test', () => {

  let testArr = [1,2,3,4,5];

  it('When given an array of any length and value, should insert value into middle of array ', () => {
    let answer = arrayShift.insertShiftArray(testArr, 9);
    expect(answer).toEqual([1,2,3,9,4,5]);
  });
  it('Require two arguments', () => {
    expect(arrayShift.insertShiftArray(9)).toBeNull();
  });
  it('first param must be an array', () => {
    expect(arrayShift.insertShiftArray(9,testArr)).toBeNull();
    expect(arrayShift.insertShiftArray('hi',testArr)).toBeNull();
    expect(arrayShift.insertShiftArray({},testArr)).toBeNull();
    expect(arrayShift.insertShiftArray(null,testArr)).toBeNull();
    expect(arrayShift.insertShiftArray(undefined,testArr)).toBeNull();
    expect(arrayShift.insertShiftArray(NaN,testArr)).toBeNull();
  });

});


