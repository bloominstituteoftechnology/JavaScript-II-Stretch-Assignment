// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
 constructor({ username, password }) {
 this.username = username;
 this.password = password;
 }
}	

function checkPassword(str) {
  if (this.password === str) return true;
    return false;
  }


         
   const me = new User({
     username: 'LambdaSchool',
     password: 'correcthorsebatterystaple',
   	});
         
   const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`		  const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`
    console.log(result);
                  
    const checkPassword = function comparePasswords(passwordToCompare) {
      if (this.password === passwordToCompare) return true;
      return false;
     
    };
    console.log(checkPassword.call(me, 'correcthorsebatterystaple'));
    console.log(checkPassword.apply(me, ['correcthorsebatterystaple']));
    
    const testBind = checkPassword.bind(me);
    console.log(testBind('correcthorsebatterystaple'));

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call

// .apply

// .bind
