// Part 1
// Create a class called User using the ES6 class keyword.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

// code here
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
  comparePasswords(par) {
    console.log('password: '+ (this.password) + ' passed in password: ' + par + " email: " + this.email)
    if (this.password === par) return true;
    return false;
  }
}
const exUser = new User({
  email: "abram",
  password: 'NaNhaha',
});
const cpboolean = exUser.comparePasswords("NaNhaha");
console.log(cpboolean)
console.log("hey function: " + exUser.email)

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
class Animal {
  constructor(options) {
    this.age = options.age;
  }
  growOlder() {
    this.age = this.age + 1;
    return this.age;
  }
}
class Cat extends Animal {  
  constructor(options) {
    super(options);
    this.name = options.name;
  }
  meow() {
    return `${this.name} meowed!`
  }
}
const catA = new Cat({
  name: "kitty",
  age: 1,
} );
let age = catA.age;
let name = catA.name;
console.log("cat name: " + name + " age: " + age + " function meow: " + catA.meow() + " function older: " + catA.growOlder())


/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};
