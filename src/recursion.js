// Complete the following functions.

const nFibonacci = (n) => {
  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n === 0) {
    return 1;
  } return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  let tester;
  let flag = true;
  const checkLeaves = (object) => {
    // console.log(Object.keys(object));
    Object.keys(object).forEach((elem) => {
      if (tester === undefined && typeof elem !== 'object') {
        tester = object[elem];
      }
      if (typeof object[elem] === 'object') {
        return checkLeaves(object[elem]);
      }
      if (object[elem] !== tester) {
        flag = false;
      }
    });
  };
  checkLeaves(obj);
  return flag;
};


// const checkMatchingLeaves = (obj) => {
//   // initialize some value...
//   const keys = Object.keys(obj);
//   const value = Object.values(obj);
//   // initialize some flag.. boolean.
//   let tester;
//   let result = true;
//   // initialize some helper function and pass obj... leaf checker recursive function
//     // check all the keys = this is a hint......for loop of some kind
//   for (let i = 0; i < keys.length; i++) {
//       // if a key is an object && initial value is undef
//     if (typeof obj[keys[i]] !== 'object') {
//       tester = obj[keys[i]];
//     }
//     if (typeof obj[keys[i]] === 'object') {
//       // if a value is an object ==> recurse
//       return checkMatchingLeaves(obj[keys[i]]);
//     }
//     if (!(obj[keys[i]] === tester)) {
//       result = false;
//     }
//   }
//   return result;
//     // if a value is found, and it doesn't match our initial value
//     // trip our flag to false
//     // return;
//   // return true/false
// };
  // return true if every property on `obj` is the same
  // otherwise return false
  
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
