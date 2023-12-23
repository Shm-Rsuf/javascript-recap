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

// console.log(`${d ? d : -1}`);
// var d = 7;

/* Spread Operator */
// let numbers = [1, 2, 3, 4, 5];
// let newNumber = 6;
// // numbers.push(newNumber);
// numbers = [...numbers, newNumber];
// console.log(numbers);

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// const obj = {
//   name: "abc",
//   loc: "bd",
// };

// const newObj = Object.assign(obj, { type: "company" });
// newObj.name = "rafi";
// console.log(newObj);

// console.log(obj);

/* Rest Parameter */
// function addAllArgs(...args) {
//   return args.reduce((preVal, curVal) => {
//     return preVal + curVal;
//   });
// }

// console.log(addAllArgs(1, 3));
// console.log(addAllArgs(1, 3, 4));
// console.log(addAllArgs(1, 3, 6, 5));

/* Default Parameter */
// const typeCheck = (number = 1) => {
//   return typeof number;
// };

// console.log(typeCheck(1));
// console.log(typeCheck("1"));
// console.log(typeCheck(""));
// console.log(typeCheck(undefined));
// console.log(typeCheck(null));
// console.log(typeCheck(false));
// console.log(typeCheck(NaN));

/* Call, Apply, Bind methond in Javascript */
// const messi = {
//   fName: "lionel",
//   lName: "messi",
// };

// const virat = {
//   fName: "virat",
//   lName: "kohli",
// };

// function invite(greet1, greet2) {
//   console.log(`${greet1}, ${this.fName} ${this.lName}, ${greet2}`);
// }

// invite.call(messi, "Hello", "How are you?");
// invite.call(messi, "Hello", "How are you?");

/* Higher order function in Javascript */
// const firstOrderFunc = () => console.log("Hello, I am a First order function");
// const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);

/* Constructor function in javascript */
// function Bike(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Bike.prototype.getFulInfo = function () {
//   return this.model + " bike has " + this.color + " color";
// };

// let suzuki = new Bike("Suzuki", "yellow");
// console.log(suzuki.getFulInfo());

// class Bike {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
//   getFulInfo() {
//     return `${this.model} bike has ${this.color} color`;
//   }
// }

// const suzuki = new Bike("suzuki", "black");
// console.log(suzuki.getFulInfo());
