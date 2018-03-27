class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
  comparePasswords(password) {
    return password === this.password;
  }
}

class Animal {
  constructor(options) {
    this.age = options.age;
  }
  growOlder() {
    return this.age += 1;
  }
}
class Cat extends Animal {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
  meow() {
    return '$(this.name} meowed!';
  }
}

module.exports = {
  User,
  Cat,
};
