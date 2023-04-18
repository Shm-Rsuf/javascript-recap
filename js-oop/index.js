// 01. What is Object-Oriented Programming?
// 02. OOP in JavaScript
// 03. Constructor Functions and the new Operator

/* CONSTRUCTOR */
/* function Person(name, age) {
  this.name = name;
  this.age = age;
} */

/* INSTANCE */
/* const person1 = new Person("shohan", 25);
const person2 = new Person("usuf", 26);

console.log(person1.name);
console.log(person2.name);

console.log(Person.prototype); */

/* 04. Prototypes */
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("shm usuf", 26);

// console.log(Person.prototype); //prototype is used by constructor, to view it's prototype
// console.log(person1.__proto__); //__proto__ is used by instances, to view it's constructor's prototype

// console.log(Person.__proto__);
// console.log(person1.prototype); */

/* 05. Prototypal Inheritance and The Prototype Chain */
/* CONSTRUCTOR 1 */
/* function Animal(name) {
  this.name = name;
}

//Prototype for Constructor 1
Animal.prototype.greet = function () {
  return `Hello ${this.name}`;
}; */

/* CONSTRUCTOR 2 */
/* function Cat(name, birthYear) {
  Animal.call(this, name);
  this.birthYear = birthYear;
}
//Prototype for Constructor 2
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.calcAge = function () {
  return `calculated age is :${new Date().getFullYear() - this.birthYear}`;
};

//instances
const cat1 = new Cat("tom", 2020);
console.log(cat1.name);
console.log(cat1.calcAge());
console.log(cat1.birthYear);
console.log(cat1.greet()); */

// 06. Prototypal Inheritance on Built-In Objects

/* 07. ES6 Classes */
/* class Animal {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

class Cat extends Animal {
  constructor(name, birthYear) {
    super(name);
    this.birthYear = birthYear;
  }

  calcAge() {
    return `${new Date().getFullYear() - this.birthYear} years.`;
  }
}

const cat1 = new Cat("Cutty", 2021);
const animal1 = new Animal("Doggy");

// console.log(cat1.calcAge());
// console.log(cat1.greet());

console.log(animal1.greet()); */
// console.log(animal1.calcAge()); //error
