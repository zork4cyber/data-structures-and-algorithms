'use strict';

function multiBracketValidation(str) {
  let stack = [];
  if(!str) {console.log(false);}
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === '('){ stack.push(')'); } 
    if(str.charAt(i) === '['){ stack.push(']'); } 
    if(str.charAt(i) === '{'){ stack.push('}'); }
    if( str.charAt(i) === ')' || str.charAt(i) === '}' || str.charAt(i) === ']' ) {
      console.log(str.charAt(i));
      if(str.charAt(i) === stack[0]) {
        console.log(stack);
        stack.pop();
        console.log(stack);
      }
      else { console.log(false); }
    }
    console.log(stack);
  }
}


let example = '({})';
multiBracketValidation(example);
