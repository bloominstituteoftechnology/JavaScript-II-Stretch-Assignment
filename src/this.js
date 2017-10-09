// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder
/* part 1 */
class User {
  constructor(options) {
    // set a username and password property on the user object that is created
    this.username = options.username;
    this.password = options.password;
    // -----------------------------
    this.checkPassword = (input) => {
      return input === this.password;
    };
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

console.log('me.checkPassword(correcthorsebatterystaple): ', me.checkPassword('correcthorsebatterystaple'));
console.log('me.checkPassword(correcthorsebatterystaple): ', me.checkPassword('pw'));

/* part 2 */

const checkPassword2 = function(input) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  // ---------------------------------------------------  
  // console.log(me.password);
  return input === this.password;
};


// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

/* Works, but not what is wanted:
// .call
console.log('.call [correcthorsebatterystaple]: ', me.checkPassword.call(me, 'correcthorsebatterystaple'));
console.log('.call [pw]: ', me.checkPassword.call(me, 'pw'));

// .apply
console.log('.apply [correcthorsebatterystaple]: ', me.checkPassword.apply(me, ['correcthorsebatterystaple']));
console.log('.apply [pw]: ', me.checkPassword.apply(me, ['pw']));

// .bind
console.log('.bind[correcthorsebatterystaple]: ', me.checkPassword.bind(me)('correcthorsebatterystaple'));
console.log('.bind[pw]: ', me.checkPassword.bind(me)('pw'));
*/

// .call
console.log(".call 'correcthorsebatterystaple': ", checkPassword2.call(me, 'correcthorsebatterystaple'));
console.log(".call 'pw': ", checkPassword2.call(me, 'pw'));

// .apply
console.log(".apply 'correcthorsebatterystaple': ", checkPassword2.apply(me, ['correcthorsebatterystaple']));
console.log(".apply 'pw': ", checkPassword2.apply(me, ['pw']));

// .bind
console.log(".bind 'correcthorsebatterystaple': ", checkPassword2.bind(me)('correcthorsebatterystaple'));
console.log(".bind 'pw': ", checkPassword2.bind(me)('pw'));