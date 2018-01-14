class User {


  constructor(options) {
    // set a username and password property on the user object that is created
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(toCheck) {
    return this.password === toCheck;
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});
// create a method on the User class called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
const checkPassword = function comparePasswords(passwordToCompare) {
  if (passwordToCompare === this.password) return true;
  return false;
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
};
/* part 2 */
// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
checkPassword.call(me, 'correcthorsebatterystaple');
// .apply
checkPassword.apply(me, 'correcthorsebatterystaple');
// .bind;
checkPassword.bind(me, 'correcthorsebatterystaple');
