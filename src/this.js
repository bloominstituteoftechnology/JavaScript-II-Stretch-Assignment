// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword (passwordToCheck) {
    return passwordToCheck === this.password;
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple');


/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  return passwordToCompare === this.password;
};

checkPassword.call(me, 'correcthorsebatterystaple');
checkPassword.apply(me, ["correcthorsebatterystaple"]);
const boundPassCheck = checkPassword.bind(me);
boundPassCheck('correcthorsebatterystaple');


