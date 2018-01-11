// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
    this.checkPassword = options.checkPassword;
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
  checkPassword(passwordToCompare) {
    return this.password === passwordToCompare;
  },
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
console.log(result);

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return this.password === passwordToCompare;
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
console.log(checkPassword.call(me, 'correcthorsebatterystaple'));
// .apply
console.log(checkPassword.apply(me, ['correcthorsebatterystaple']));
// .bind
const checkPasswordMe = checkPassword.bind(me);
console.log(checkPasswordMe('correcthorsebatterystaple'));
