// Complete the following functions.

const nFibonacci = n => (
  n <= 2
    ? 1
    : nFibonacci(n - 1) + nFibonacci(n - 2));

const nFactorial = n => (
  n === 1
    ? 1
    : n * nFactorial(n - 1));


/* Extra Credit */

// return true if every property on `obj` is the same
// otherwise return false

/* pseudocode:
 * 1. traverse tree until we find a leaf
 * 2. at first leaf: if checkVal is undefined, checkVal = leafVal
 * 3. else if checkVal === leafVal return false
 * 4. else return true
 */
const checkMatchingLeaves = (obj) => {
  const result = [];

  function helper(innerObj) {
    Object.keys(innerObj).forEach((key) => {
      if (typeof innerObj[key] === 'object') helper(innerObj[key]);
      else result.push(innerObj[key]);
    });
  }

  helper(obj);

  return !!result.reduce((a, b) => (
    a === b
      ? a
      : false));
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
