// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }

  checkPassword(passphrase) {
    return passphrase === this.password;
  }

}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
// console.log(result); // true

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return this.password === passwordToCompare;
};

// console.log(checkPassword.call(me, 'correcthorsebatterystaple')); // true
// console.log(checkPassword.call(me, 'a')); // false

// console.log(checkPassword.apply(me, ['correcthorsebatterystaple'])); // true
// console.log(checkPassword.apply(me, ['a'])); // false

// boundFunction = checkPassword.bind(me);
// boundFunction('passwordToCompare');
// console.log(checkPassword.bind(me)('correcthorsebatterystaple')); // true
// console.log(checkPassword.bind(me)('a')); // false
