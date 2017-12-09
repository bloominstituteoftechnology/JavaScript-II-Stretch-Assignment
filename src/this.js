// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;     // set a username and password property on the
    this.password = options.password;     // user object that is created
  }
  
  checkPassword(str) {                        // create a method on the User class called `checkPassword`  
    if (str === this.password) return true;   // this method should take in a string and compare it to 
    return false;                             // the object’s password property
  }                                           // return `true` if they match, otherwise return `false`v
};

const me = {
  username: 'bitcoinTroy',
  password: 'correcthorsebatterystaple',
};

const troy = new User(me);
const result = troy.checkPassword('correcthorsebatterystaple'); // should return `true`

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  if (passwordToCompare === this.password) return true;
  return false;
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind
const test = troy.checkPassword('correcthorsebatterystaple');
console.log(test);
// .call
const testCall = checkPassword.call(troy, 'correcthorsebatterystaple');
console.log(testCall);
// .bind
const testBind = checkPassword.bind(troy, 'correcthorsebatterystaple');
console.log(testBind);
// .apply
const testApply = troy.checkPassword.apply(troy, ['correcthorsebatterystaple']);
console.log(testApply);
