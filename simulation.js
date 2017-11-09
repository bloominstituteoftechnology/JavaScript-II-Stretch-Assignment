// Environment set to test functionality outside the tests scope
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

class Animal {
    constructor(options) {
      this.age = options.age;
    }
    growOlder() {
      return this.age;
    }
}
  
class Cat extends Animal {
    constructor(options) {
      super(options);
      this.name = options.name;
    }
    meow() {
      return (`${this.name} meowed!`);
    }
}

// const newUser = new User({email: 'designerexpert@yahoo.com', password: 'test123'})
// console.log(newUser);
// console.log(newUser.comparePasswords('test123'));

// const newCat = new Cat({age: 4, name: 'FurBall'});
// console.log(newCat);
// console.log(newCat.growOlder())

const nFibonacci = (n) => {
    // fibonacci sequence: 1 2 3 5 8 13 ...
    // return the nth number in the sequence
    if (n <= 1) return 1;
    return nFibonacci(n - 1) + nFibonacci(n - 2);
};

//console.log(nFibonacci(6));