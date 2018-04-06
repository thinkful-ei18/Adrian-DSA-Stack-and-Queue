'use strict';

const Stack = require('./stack');

const main = (function () {

  let stack = new Stack;
  // Kirk, Spock, McCoy, Scotty
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  console.log(stack);

})();

