// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
    // set a username and password property on the user object that is created
  }
  checkPassword(pwInput) {
    return this.password === pwInput;
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

/* part 2 */

// const checkPassword = function comparePasswords(passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
const checkPassword = function comparePasswords(passwordToCompare) {
  return (this.password === passwordToCompare);
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call === (asd, asd)
const trueTest1 = checkPassword.call(me, 'correcthorsebatterystaple');
const falseTest1 = checkPassword.call(me, 'asd');
console.log(trueTest1); // -> true
console.log(falseTest1); // -> false
// .apply === (asd, [asd])
const trueTest2 = checkPassword.apply(me, ['correcthorsebatterystaple']);
const falseTest2 = checkPassword.apply(me, ['asdasd']);
console.log(trueTest2); // -> true
console.log(falseTest2); // -> false
// .bind === (asd)(asd)
const trueTest3 = checkPassword.bind(me)('correcthorsebatterystaple');
const falseTest3 = checkPassword.bind(me)('asdasdasd');
console.log(trueTest3); // -> true
console.log(falseTest3); // -> false
