// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  let prevProp = Object.values(obj)[0];
  let isTrue = true;
  Object.values(obj).forEach((key) => {
   /* if (typeof key === 'object'){  // this is testing correctly
       checkMatchingLeaves(key);     // but it's not recurring properly, something to do with the variable names?
       } */
    if (typeof key !== 'object') {
      console.log(key);             // just using the console lines to check that this if statement
      console.log(`prev -  ${prevProp}`);      // is getting the correct input, which it is.
      if (key !== prevProp) return isTrue = false;
      prevProp = key;
    }
  });
  return isTrue;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
