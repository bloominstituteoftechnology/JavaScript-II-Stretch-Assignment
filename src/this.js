// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
}
  checkPassword(check) {
    return(this.password === check);
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
};
    
    
checkPassword.call(me, 'correcthorsebatterystaple');
checkPassword.apply(me, ['correcthorsebatterystaple']);
    
const check = checkPassword.bind(me);
