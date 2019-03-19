'use strict';

/** The reverseArr function takes in an array and reverses its order. */
function reverseArr(arr) {
  let arr2 = [];
  for(let i = arr.length - 1; i >= 0; i--){
    arr2.push(arr[i]);
  }
  return arr2;
}


let x = [1,2,3,4,5];
reverseArr(x);
