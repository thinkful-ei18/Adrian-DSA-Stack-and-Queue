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

  function display(stack) {
    if (stack.top === null) {
      throw new Error('The stack is empty');
      // Throw an error if the stack is empty!
    }

    let currentNode = stack.top;
    let data = '';
    while(currentNode) {
      data += `=> ${currentNode.data} `;
      currentNode = currentNode.next;
    }
    return console.log('CURRENT STACK', data);
  }

  let stack = new Stack;
  // Kirk, Spock, McCoy, Scotty
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  peek(stack);
  display(stack);
  stack.pop();
  stack.pop();
  display(stack);

})();

