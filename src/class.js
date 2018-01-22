// Part 1
// Create a class called User using the ES6 class keyword.
// The constructor of the class should have a parameter called `options`.
// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

class User {  // creates class User
  constructor(options) { // creates constructor that takes options as a paramter
    this.email = options.email; // sets the new objects email to the option parameter's email
    this.password = options.password; // sets the new object's password to the option parameter's password
  }
  comparePasswords(str) {  // creates function on the User class to compare passwords that accepts a string as a parameter
    if (str === this.password) return true;  // checks if the parameter str equals the new object's password and returns true if it does
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

class Animal { // creates an Animal class
  constructor(options) { // creates a constructor that takes options as a parameter
    this.age = options.age; // sets the new object's age to the option parameter's age;
  }
  growOlder() {  // creates a function that ages the animal one year
    return ++this.age;  // ++ must be before the variable; if it's postfix it won't be evaluated until after the argument (i.e. won't be because it is a return statement)
  }
}

class Cat extends Animal { // creates a Cat class that extends/is the child of the Animal class
  constructor(options) { // creates a constructor that accepts a parameter called options
    super(options); // super(options) must be included to extend the class (yay for redundancy!)
    this.name = options.name; // sets the new object's name to the option parameter's name
  }
  meow() {
    return `${this.name} meowed!`; // creates a function that returns the name of the cat and meow
  }
}

/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};
