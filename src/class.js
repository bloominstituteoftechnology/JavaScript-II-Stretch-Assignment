class User {
  constructor(options) { this.email = options.email; this.password = options.password; }
  comparePasswords(checkedPassword) {
    if (this.password === checkedPassword) return true;
    return false;
  }
}

class Animal {
  constructor(options) { this.age = options.age; }
  growOlder() { return this.age += 1; }
}

class Cat extends Animal {
  constructor(options) { super(options); this.name = options.name; }
  meow() { console.log(`${this.name} meowed!`); }
}

/* eslint-disable no-undef */

module.exports = {
  User,
  Cat,
};
