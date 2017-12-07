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

  return Object.prototype.call(User.checkPassword).apply(passwordToCompare);
};

