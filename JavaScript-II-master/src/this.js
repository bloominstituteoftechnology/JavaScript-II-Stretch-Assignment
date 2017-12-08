/* part 1 */

class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(str) {
    if (str === this.password) return true;
    return false;
  }
};
const me = {
  username: 'faizahusain',
  password: 'imnotgonnatellyou',
};
const faiza = new User(me);
const result = faiza.checkPassword('imnotgonnatellyou');

/* part 2 */
const checkPassword = function comparePasswords(passwordToCompare) {
   if (passwordToCompare === this.password) return true; 
     return false;
};

const test = faiza.checkPassword('imnotgonnatellyou');
console.log(test);
// .call
const testCall = faiza.checkPassword.call(faiza, 'imnotgonnatellyou');
console.log(testCall);

// .apply
const testApply = faiza.checkPassword.apply(faiza, ['imnotgonnatellyou']);
console.log(testApply);

// .bind
const testBind = checkPassword.bind(faiza, 'try');
console.log(testBind);

// use .call, .apply, and .bind
