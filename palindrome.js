'use strict';

const Stack = require('./stack');

function is_palindrome(string) {

  let stack = new Stack();
  let chars = '';
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  for (let i = 0; stack.top !== null; i++) {
    chars += stack.pop(string[i]);
  }

  if (string === chars) {
    return true;
  } else {
    return false;
  }

}

console.log(is_palindrome('1001'));

// display(stack);
// make the string characters lowercase
// initialize the new stack
// open a for loop to split string into characters: s[i]
// inside for loop:
// push characters into the stack - stack.push(s[i]) - d a d
// exit for loop
//enter for loop
// pop the letters off of the stack and into a new variable
// pop until this.top === null
// exit for loop
// compare the strings
// return boolean