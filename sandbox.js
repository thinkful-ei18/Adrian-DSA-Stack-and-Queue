'use strict';

const Stack = require('./stack');

const main = (function () {

  function peek(stack) {
    if (stack.top === null) {
      throw new Error('The stack is empty');
      // Throw an error if the stack is empty!
    }

    return console.log(JSON.stringify(stack.top.data), 'is at the top of the stack');
  }

  let stack = new Stack;
  // Kirk, Spock, McCoy, Scotty
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  console.log(JSON.stringify(stack));
  peek(stack);

})();

