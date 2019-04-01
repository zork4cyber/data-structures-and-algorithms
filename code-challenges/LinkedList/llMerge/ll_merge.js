'use strict';

function mergeLists(ll1, ll2){
  let a1 = ll1.head;
  let b1 = ll2.head;
  let a2 = a1.next;
  let b2 = b1.next;
  if(a1 === null && b1 != null) {
    return b1;
  }
  if (b1 === null && a1 != null) {
    return a1;
  }
  if (a1.next === null && b1.next != null){
    a1.next = b1;
    return a1;
  }
  if(b1.next === null && a1.next != null) {
    a1.next = b1;
    b1.next = a2;
    return a1;
  }
  while(a1.next != null && b1.next != null) {
    a1.next = b1;
    b1.next = a2;
    a1 = a2;
    b1 = b2;
    a2 = a2.next;
    b2 = b2.next;
    if (a2 != null && b2 === null){
      a1.next = b1;
      b1 = a2;
      return a1;
    }
    if(b2 != null && a2 === null){
      a1.next = b1;
      return a1;
    }
  }
  return a1;
}

