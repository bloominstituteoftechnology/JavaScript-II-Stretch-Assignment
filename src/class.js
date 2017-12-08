// Part 1
// Create a class called User using the ES6 class keyword. */ CHECK /*
// The constructor of the class should have a parameter called `options`. */ CHECK /*
// `options` will be an object that will have the properties `email` and `password`. */ ??? /*
// Set the `email` and `password` properties on the class. */ CHECK /*
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter */ CHECK /*
// for a potential password that will be compared to the `password` property. */ CHECK /*
// Return true if the potential password matches the `password` property.  Otherwise return false. */ CHECK /*

class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
  comparePasswords(potentialPassword) {
    if (potentialPassword === this.password) return true;
    return false;
  }
}

  //   return false;
// Part 2
// Create a class called `Animal` and a class called `Cat` using ES6 classes. */ CHECK /*
// `Cat` should extend the `Animal` class. */ CHECK /*
// Animal and Cat should both have a parameter called `options` in their constructors. */ CHECK /*
// Animal should have the property `age` that's set in the constructor and the method */ ??? /*
// `growOlder` that returns the age after incrementing it. */ CHECK /*
// Cat should have the property `name` that is set in the constructor and the method */ CHECK /*
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name` */ CHECK /*
// property set on the Cat instance. */ CHECK /*

class Animal {
  constructor(options) {
    this.age = options.age;
  }
  growOlder() {
    return this.age++;
  }
}

class Cat extends Animal {
  constructor(options) {
    super(options);     // is this right?
    this.name = options.name;
  }
  meow() {
    return `${this.name} meowed!`;
  }
}

/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};
