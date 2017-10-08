// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    // set a username and password property on the user object that is created
    this.username = options.username;
    this.password = options.password;
  }
// create a method on the User class called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
  checkPassword(str) { // creates method in ES6
    return this.password === str.password;
  }
}

const me = new User({ // new instance of User class
  username: 'LambdaSchool', // sets prop values for me
  password: 'correcthorsebatterystaple',
});
// stores comparison in result
const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`

/* part 2 */

const checkPassword = function comparePasswords(str) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  return str === this.password;
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
checkPassword.call(me, 'Tcorrecthorsebatterystaple');
// .apply
checkPassword.apply(me, ['correcthorsebatterystaple']);
// .bind
const checkyPass = checkPassword.bind(me);
checkyPass('correcthorsebatterystaple');
