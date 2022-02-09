'use strict';

const QuickSort = (arr, left, right) => {

  if(left < right){
    let position = Partition(arr, left, right);
   
    //sort left and right
    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
  }
  return arr;
};
       

function Partition(arr, left, right){
  let pivot = arr[right];
  let position = left;

  for(let i = left; i < right; i++){
    if(arr[i] < pivot){
      swap(arr, i, position);
      position++;
    }
  }
  swap(arr, right, position);
  return position;
}
       

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
       

let arr1 = [9,8,5,3,2];
let arr2 = [11,8,14,3,6,2,1, 7];
let arr3 = [16,11,9,7,6,5,3, 2];
console.log(QuickSort(arr1,0,arr1.length - 1));
console.log(QuickSort(arr2,0,arr1.length - 1));
console.log(QuickSort(arr3,0,arr1.length - 1));

module.exports = QuickSort;