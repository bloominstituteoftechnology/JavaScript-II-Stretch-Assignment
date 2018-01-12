// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let result = true;
  const testArr = [];
  function recur(objGiven) {
    Object.keys(objGiven).forEach((key) => {
      if (typeof objGiven[key] === 'number' || typeof objGiven[key] === 'string') {
        testArr.push(objGiven[key]);
      }
      if (typeof objGiven[key] === 'object') {
        recur(objGiven[key]);
      }
    });
  }
  recur(obj);
  testArr.reduce((memo, i) => {
    if (memo !== i) {
      result = false;
    }
    return i;
  });
  return result;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
