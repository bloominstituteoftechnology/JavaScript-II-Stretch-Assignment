class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(str) {
    return str === this.password;
  }
}
const me = {
  username: 'LambdaSchool',
  password: 'buttsmcghee',
};
const ira = new User(me);
// first test
const result = ira.checkPassword('buttmcghee');
// .call
const result2 = ira.checkPassword.call(ira, 'buttsmcghee');
// .apply
const result3 = ira.checkPassword.apply(ira, ['buttsmcghee']);
// .bind
const result4 = ira.checkPassword.bind(ira, 'buttsmcghee');
