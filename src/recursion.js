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
  let result = [];

  function _helper(obj) {
    Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      _helper(obj[key]);
    }
    else result.push(obj[key]);
    });
  }

  _helper(obj);

  return !!result.reduce(function(a, b) {
    return (a === b)
      ? a
      : false;
  });
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
