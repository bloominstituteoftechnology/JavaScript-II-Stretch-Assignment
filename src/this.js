// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(username, password) {
    // set a username and password property on the user object that is created
    this.username = username;
    this.password = password;
  // create a method on the User class called `checkPassword`
    this.checkPassword = function() {
    if (password === this.password) {
    return true;
  } else {
  return false;
  }
}
  }
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
console.log(result)
/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  if (this.password === passwordToCompare) {
    return true;
  } else {
    return false;
  }
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
console.log(checkPassword.call(me));
// .apply
console.log(checkPassword.apply(me));
// .bind
let bindFunction = checkPassword.apply(me);
console.log(bindFunction);