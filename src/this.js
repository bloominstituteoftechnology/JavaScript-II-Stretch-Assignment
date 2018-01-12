/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
    // set a username and password property on the user object that is created
  }
  checkPassword (passwordToCompare) {
    if (this.password === passwordToCompare) return true;
    return false;
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

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  if (this.password === passwordToCompare) return true;
  return false;
};
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
checkPassword.call(me, 'correcthorsebatterystaple');
// .apply
checkPassword.apply(me, ['correcthorsebatterystaple']);
// .bind
const meCheckPassword = checkPassword.bind(me);
meCheckPassword('correcthorsebatterystaple')
