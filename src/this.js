// part 1
class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(passwordInput) {
    return (passwordInput === this.password);
  };
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple');
// console.log(result);

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return (passwordToCompare === this.password);
};

checkPassword.call(me, 'correcthorsebatterystaple');

checkPassword.apply(me, ['correcthorsebatterystaple']);

checkPassword.bind(me)('correcthorsebatterystaple');
