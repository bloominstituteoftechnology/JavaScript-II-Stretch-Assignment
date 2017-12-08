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
  username: 'barrettjviator',
  password: 'itsasecret',
};

const barrett = new User(me); 

// first test
const result = barrett.checkPassword('ittsasecret'); 
console.log(result);

// .call
const result2 = barrett.checkPassword.call(barrett, 'itsasecret');
console.log(result2);

// .apply
const result3 = barrett.checkPassword.apply('itsasecret');
console.log(result3);

// .bind
const result4 = barrett.checkPassword.bind(barrett, 'itsasecret');
console.log(result4);