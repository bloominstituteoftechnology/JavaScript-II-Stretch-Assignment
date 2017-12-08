// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(str) {
    if (str === this.password) return true;
    return false;
      // set a username and password property on the user object that is created
  }
// create a method on the User class called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`v
}
const me = {
  username: 'LambdaSchool',
  password: 'thisisapassword',
};

const Travis = new User(me);

const result = Travis.checkPassword('thisisapassword'); 
// should return `true`

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
    if (passwordToCompare === this.password) return true;
    return false;  
  // note that we use the `function` keyword and not `=>`
};
// .call
let result2 = checkPassword.call(Travis, 'thisisapassword');
console.log(result2);

// .apply
let result3 = checkPassword.apply(Travis, 'thisisapassword');
console.log(result3);

// .bind
let result4 = checkPassword.bind(Travis, 'thisisapassword');
console.log(result4);