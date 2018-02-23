// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) {
    return n;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0 || n === 1) return 1;
  return (n * nFactorial(n - 1));
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
    // return true if every property on `obj` is the same
    // otherwise return false
    const objKeys = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] !== 'object') {
        objKeys.push(obj[i]);
      }
      if (typeof obj[i] === 'object') {
        obj[i].map((x) => {
          return checkMatchingLeaves(obj);
        });
      }
    }
    for (let j = 0; j < objKeys.length; j++) {
      if (objKeys[j] === obj.indexOf(-1)) {
        return true;
      }
      return false;
    }
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};

