// Complete the following functions.

const nFibonacci = n => (
  n <= 2
    ? 1
    : nFibonacci(n - 1) + nFibonacci(n - 2));

const nFactorial = n => (
  n === 1
    ? 1
    : n * nFactorial(n - 1));

// const hasSameValue = () => {}

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  let checkVal;

  if (typeof obj === 'object') {
    // return Object.keys(obj).forEach()
  }

  /* pseudocode:
   * 1. traverse tree until we find a leaf
   * 2. at first leaf: if checkVal is undefined, checkVal = leafVal
   * 3. else if checkVal === leafVal return false
   * 4. else return true
   */


  // Hint? Not sure if this is going to help...
  // Object.prototype.toString.call(obj) === '[object Object]'
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
