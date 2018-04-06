'use strict';

const Stack = require('./stack');

function isValid (exp) {

  let char;
  let stack = new Stack();

  // variables: lastFoundSymbol, matchingSymbol,
  // open a for loop
  // open if statement:
  // push opening parens into stack
  // exit if statement
  // for every closing parens, pop the stack
  // throw error if stack is empty
  // throw error if opening/closing parens not equal


  // (1 + 2) + 2) -- fail
  // (1 + 2) - (7 + 2) -- pass

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
  return console.log('Expression has matching parenthesis');
}

isValid(
  '(1 + 1) - (2 + 2))))'
);