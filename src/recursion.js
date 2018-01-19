// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return n;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) {
    return n;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const values = [];

  function gatherValues(innerObj) {
    Object.keys(innerObj).forEach((key) => {
      if (typeof innerObj[key] === 'object') {
        gatherValues(innerObj[key]);
      } else {
        values.push(innerObj[key]);
      }
    });
  }
  gatherValues(obj);
  const first = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] !== first) {
      return false;
    }
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
