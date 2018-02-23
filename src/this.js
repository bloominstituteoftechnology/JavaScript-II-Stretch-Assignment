// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    // set a username and password property on the user object that is created
    this.username = options.username;
    this.password = options.password;
    // create a method on the User class called `checkPassword`
    // this method should take in a string and compare it to the object's password property
    // return `true` if they match, otherwise return `false`
  }
    // checkPassword(str) {
    //   return this.password === str;
    // }
  }
console.log(User);

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});
const you = new User({
  username: 'LambdaSchool',
  password: 'staple',
});
const them = new User({
  username: 'LambdaSchool',
  password: 'correct',
});
/* part 2 */

const checkPassword = function (passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  return this.password === passwordToCompare;
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind
console.log(me);
//const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
//console.log(result);

// .call
console.log(checkPassword.call(me, 'correcthorsebatterystaple'));

// .apply
const passwords = ['correcthorsebatterystaple'];
console.log(checkPassword.apply(me,passwords));

// .bind

const boundedCheckPassword = checkPassword.bind(me);
console.log(boundedCheckPassword('correcthorsebatterystaple'));