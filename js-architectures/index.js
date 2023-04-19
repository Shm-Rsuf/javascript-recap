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
