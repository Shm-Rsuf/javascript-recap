"use strict";
/* 01. Setters and Getters */
/* class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  //setter for radius
  set radius(radius) {
    if (radius > 0) {
      this._radius = radius;
    } else {
      console.log("radius must be a positive number!");
    }
  }

  //getter for radius
  get radius() {
    return this._radius;
  }

  //setter for area
  get area() {
    return Math.PI * this._radius ** 2;
  }

  //getter for perimeter
  get perimeter() {
    return 2 * Math.PI * this._radius;
  }
}

const circle1 = new Circle(5);
circle1.radius = -10;
// console.log(circle1._radius);
// console.log(circle1.area);
// console.log(circle1.perimeter); */

/* STATIC PROPERTY */
/* class Calculations {
  constructor() {}

  static add(a, b) {
    return a + b;
  }

  static multiplication(a, b) {
    return a * b;
  }
}

// const cal1 = new Calculations()
console.log(Calculations.add(4, 6));
 */

/* template literal in javascript */
// let name = "usuf ali",
//   age = 27,
//   job = "vivasoft";

// console.log(`My name is ${name}. I\'m ${age} years old & I work at ${job}`);

// const myInfo = {
//   name: "usuf ali momin",
//   age: 27,
//   job: "ollyo bangladesh",
// };

// console.log(
//   `My name is ${myInfo.name}. I\'m ${myInfo.age} years old & I work at ${myInfo.job}`
// );

/* Assignment Destructuring */
// const companyInfo = {
//   name: "vivasoft",
//   service: "software company",
//   loc: "Dhaka",
// };

// const { name: companyName, loc: companyLocation } = companyInfo;
// console.log(companyName);
// console.log(companyLocation);

// function test(a) {
//   console.log(`${a} is an ${a % 2 ? "odd" : "even"} number`);
// }

// test(1);
// test(10);

// var a = 1;
// function varTest() {
//   a = 3;
//   var a = 2;
//   console.log({ a });
//   var x = 4;
// }
// varTest();
// console.log(a);
// console.log(x);

// console.log(c);
// const c = 4;
// function constTest() {
//   console.log(c);
//   const c = 5;
//   console.log(c);
// }
// constTest();
// c = 6;
// console.log(c);

// console.log(b);
// let b = 4;
// function letTest() {
//   console.log(b);
//   let b = 5;
//   console.log(b);
// }
// letTest();

console.log(`${d ? d : -1}`);
var d = 7;
