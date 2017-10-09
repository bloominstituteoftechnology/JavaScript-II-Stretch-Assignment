// Part 1
// Create a class called User using the ES6 class keyword.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.
// code here
// Part 2
// Create a class called `Animal` and a class called `Cat` using ES6 classes.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.
// code here
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
  // ---------------------------------
  comparePasswords(input) {
    return this.password === input;
  }
}

const me = new User({
  email: 'me@school.com',
  password: 'password',
});

console.log("me.password is: ", me.password);

console.log("'password' is password? :", me.comparePasswords('password'));
console.log("'pw' is password? :", me.comparePasswords('pw'));

class Animal {
  constructor(options) {
    this.age = options.age;
  }
  // ----------------------
  growOlder(input) {
    !!input ? input : input = 1;
    this.age += input;
    return this.age;
  }
}

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
  meow() {
    return `${this.name} meowed!`;
  }
}
const Snowball2 = new Cat({
  name: 'Snowball II',
  age: 3,
});

console.log(Snowball2.meow());
console.log(`${Snowball2.name} is currently ${Snowball2.age} year old.`);
console.log(`${Snowball2.name} grew to ${Snowball2.growOlder()} years of age!`);
console.log(`${Snowball2.name} grew to ${Snowball2.growOlder(5)} years of age!`);

/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};