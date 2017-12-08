// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }

  checkPassword(str) {
    return str === this.password;
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return passwordToCompare === this.password;
};

// .call
checkPassword.call(me, 'correcthorsebatterystaple');
// .apply
checkPassword.apply(me, ['correcthorsebatterystaple']);
// .bind
checkPassword.bind(me);
