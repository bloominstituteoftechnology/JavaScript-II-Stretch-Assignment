// Part 1
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }

  comparePasswords(passwordAttempt) {
    return this.password === passwordAttempt;
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
  constructor(options) {
    super(options);
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
