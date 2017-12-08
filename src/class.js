class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }

  comparePasswords(inputPassword) {
    return inputPassword === this.password;
  }
}

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
