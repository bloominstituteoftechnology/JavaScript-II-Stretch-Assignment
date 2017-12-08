class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }

  checkPassword(somePassword) {
    return this.password === somePassword;
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple');

const checkPassword = function comparePasswords(passwordToCompare) {
  return passwordToCompare === this.password;
};

checkPassword.call(me, 'correcthorsebatterystaple');

checkPassword.apply(me, 'correcthorsebatterystaple');

checkPassword.bind(me, 'correcthorsebatterystaple');
