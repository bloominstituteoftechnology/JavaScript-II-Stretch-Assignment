// Part 1
// Create a class called User using the ES6 class keyword.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
  comparePasswords(testPw) {
    if (testPw === this.password) return true;
    return false;
  }
}


// Part 2
// Create a class called `Animal` and a class called `Cat` using ES6 classes.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age after incrementing it.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

// code here

/* eslint-disable no-undef */

class Animal {
  constructor(age) {
    this.age = age;
  }
  growOlder() {
    return ++this.age;
  }
}

class Cat extends Animal {
  constructor({ name, age }) {
    super(age);
    this.name = name;
  }
  meow() {
    return `${this.name} meowed!`;
  }
}

module.exports = {
  User,
  Cat,
};

