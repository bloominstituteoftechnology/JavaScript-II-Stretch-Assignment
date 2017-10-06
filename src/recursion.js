// Complete the following functions.

const nFibonacci = (n) => {
  if (n - 1 === 0) {
    return 1;
  } if (n - 1 === 1) {
    return 2;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const values = Object.values(obj);
//  if typeof Object.values[i] = 'object,' // this was from a thread with Thomas & Kia -- not sure where to go next.
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
