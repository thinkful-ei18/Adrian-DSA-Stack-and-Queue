'use strict';

const Stack = require('./stack');

function isValid (exp) {

  let stack = new Stack();

  let matchingChars;
  const openingChars = ['(', '{', '['];
  const closingChars = [')', '}', ']'];

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === openingChars) {
      stack.push(exp[i]);
    }
    else if (exp[i] === closingChars) {
      if (stack.top === null) {
        throw new Error('Unmatched closing parentheis at position: ' + i);
      } else {
        stack.pop();
      }
    }
  }
  return console.log('The expression is valid');
}

isValid(
  '(1 + 1) - (2 + 2)'
);