// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(passwordToCompare) {
    return (passwordToCompare === this.password ? true: false)
}};

const user_0 = new User({
  username: 'Ronin',
  password: 'ninjaturtles'
});

const user_1 = new User({
  username: 'Jeff',
  password: 'ihateyousomuch'
});

const user_2 = new User({
  username: 'guest',
  password: 'password'
});

const user_3 = new User({
  username: 'therealpres',
  password: 'iamsogreatreallyreally385'
});

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return (passwordToCompare === this.password ? true: false)};

// function method target parameter call(this, arg) apply(this, array)

const u3PasswordCheck = checkPassword.bind(user_3, 'iamsogreatreallyreally385');

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind
// .call
// .apply
// .bind

const callUsers = console.log( '>>> this.js console output obj: [keys] [values] [test results]',
  '\n' + 'user_1:', Object.keys(user_0), Object.values(user_0), user_0.checkPassword('ninjaturtles'), 'with prototype.',
  '\n' + 'user_1:', Object.keys(user_1), Object.values(user_1), checkPassword.call(user_1, 'ihateyousomuch'), 'with call.',
  '\n' + 'user_2:', Object.keys(user_2), Object.values(user_2), checkPassword.apply(user_2, ['password']), 'with apply.',
  '\n' + 'user_3:', Object.keys(user_3), Object.values(user_3), u3PasswordCheck(), 'with bind.'
);

callUsers;
