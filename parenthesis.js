'use strict';

const Stack = require('./stack');

function isValid (exp) {

  let stack = new Stack();

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
      stack.push(exp[i]);
    }
    else if (exp[i] === ')') {
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