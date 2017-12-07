// Part 1
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }

  comparePasswords(pw) {
    return this.password === pw;
  }
}


// Part 2
class Animal {
  constructor(options) {
    this.age = options.age;
  }

  growOlder() {
    return ++this.age;
  }
}

class Cat extends Animal {
  constructor(catOptions) {
    super(catOptions);
    this.name = catOptions.name;
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
