
class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(passwordInput) {
    return (passwordInput === this.password);
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); 

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return this.password === passwordToCompare;
};


checkPassword.call(me, 'correcthorsebatterystaple');

checkPassword.apply(me, ['correcthorsebatterystaple']);

const check = checkPassword.bind(me);
