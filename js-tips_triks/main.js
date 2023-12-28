"use strict";
// console.log("I'm main js");
// console.log([] + []);
// console.log({} + {});
// console.log(true + true + true);

// function myFunction() {
//   return "Bangladesh";
// }

// let value = myFunction`hello`;
// console.log(value);

/* make a function that sorts its arguments without using loops */
const myFunction = function () {
  return [].slice.call(arguments).sort();
};

console.log(myFunction(1, 4, 5, 2, 3));
