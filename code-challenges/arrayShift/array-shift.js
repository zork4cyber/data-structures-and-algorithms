'use strict';

module.exports = exports = {};

exports.insertShiftArray = (arr, val) => {
  if (!arr || !val || !Array.isArray(arr)) return null;
  let newArr = [];
  newArr.length = arr.length + 1;
  const midpoint = Math.ceil(arr.length/2);
    for(let i = 0; i < midpoint; i++){
      newArr[i] = arr[i];
    }
    newArr[midpoint] = val;
    for(let i = midpoint + 1; i < newArr.length; i++) {
      newArr[i] = arr[i - 1];
    }
    return newArr;
};
