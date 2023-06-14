"use strict";
/* const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  display: function () {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  },
};

console.log(person.display()); */

/* const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let properties in person) {
  console.log(properties);
} */
/**
 * @param {number} n
 * @return {number}
 */
/* const climbStairs = (n) => {
  if (n === 1 || n === 0) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(4)); */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let seuareRoot = num ** 0.5;
  if (seuareRoot % 1 === 0) {
    return true;
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
