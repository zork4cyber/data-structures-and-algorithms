'use strict';

module.exports = exports = {};

exports.binarySearch = (arr,val) => {
  sortCheck(arr);
  if (!Array.isArray(arr)) {return null;}
  if (typeof val != 'number') {return null;}
  let high = arr.length-1;
  let low = 0;
  let mid = 0;
  
  while(low <= high){
    mid = Math.floor((high+low)/2);
    if(val === arr[mid]){
      return mid;
    } else if(val > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

function sortCheck(arr) {
  let i;
  for (let i = 0; i < arr.length - 1; i++); { 
    if (arr[i] > arr[i + 1]) {
      return null;
    }
    else {
      return arr;
    }
  }
}
