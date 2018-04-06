'use strict';

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return s;

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



}

console.log(is_palindrome("dad")); // dad

