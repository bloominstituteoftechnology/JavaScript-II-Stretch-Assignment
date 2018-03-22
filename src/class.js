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
  comparePasswords(password){
    return password === this.password;
  
  }
}
const storePassword = new User({
  password:'passwordtest'
})

console.log(storePassword.comparePasswords('passwordtest'))
// Part 2
// Create a class called `Animal` and a class called `Cat` using ES6 classes. Done
// `Cat` should extend the `Animal` class. Done
// Animal and Cat should both have a parameter called `options` in their constructors. Done
// Animal should have the property `age` that's set in the constructor and the method Done
// `growOlder` that returns the age after incrementing it.
// Cat should have the property `name` that is set in the constructor and the method Done
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

// code here
class Animal {
  constructor(options) {
    this.age = option.age;
  }
  growOlder(){
    return this.age+= 1;
  }
}
class Cat extends Animal {
  constructor (catOptions) {
  super(catOptions)
  this.name = catOptions.name;

}//constructor
  meow(){
    return `${this.name} meowed!`
}
}//class
const fluffy = new User({
  age: 2,
  name: 'fluffy',
})
fluffy.meow();

/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};
