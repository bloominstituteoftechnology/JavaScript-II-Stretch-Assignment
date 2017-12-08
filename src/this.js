// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
    this.checkPassword = (string) => {
      if (string === this.password) {
        return true;
      }
      return false;
    };
    // set a username and password property on the user object that is created
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
console.log(result);
console.log(me);
/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  if (passwordToCompare === this.password) {
    return true;
  }
  return false;
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
};

console.log(checkPassword(me));
// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
  // checkPassword(me.call(other))
console.log(me);
                      // username: other.password
// .apply
// .bind


// function Person(options) {
//   this.name = options.name;
//   this.age = options.age;
//   this.occupation = options.occupation;
//   this.favFood = options.favFood;
// }

// const ops = {
//   name: 'Troy',
//   age: 27,
//   occupation: 'Wordpress freelance/ student',
//   favFood: 'So many tacos'
// }

// // const troy = new Person(ops);
// // console.log(troy);

// class Person {
//   contructor(obj) {
//     this.name = obj.name;
//     this.age = obj.age;
//     this.occupation = obj.occupation;
//     this.favFood = obj.favFood;
//   }
// }
// const classTroy = new Person(ops);
// console.log(classTroy);
