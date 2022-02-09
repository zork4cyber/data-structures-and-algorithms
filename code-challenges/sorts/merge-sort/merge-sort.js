'use strict';

const mergeSort = (arr) => {
  let n = arr.length;
  if(n === 0){
    return arr;
  }
  if (n === 1) {
    return arr;
  }

  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
};
// Pass in left and right split arrays
function merge (left, right) {
  // create empty array and set indexes of left and right
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // while leftIndex is less than the length of the left array and rightIndex is less than the length of the right array...
  while (leftIndex < left.length && rightIndex < right.length) {
    // if left array @ leftIndex(initially 0) is less than right array @ rightIndex then push left @ leftIndex into result Array and increase leftIndex by 1
    if (left[leftIndex] < right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      // otherwise push the right @ rightIndex into the result array and increase rightIndex by 1
      resultArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // return the resulting arr after concating the two sorted arrays togther 
  return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// let list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// let testArr = [1,1,1,5,6,9,10,7,4];
// console.log(mergeSort(list));
// console.log(mergeSort(testArr));

module.exports = mergeSort;