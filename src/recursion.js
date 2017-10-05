// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  n--;
  return nFibonacci(n) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const checkValue = Object.keys(obj)[0];
  return checkValue === Object.values(obj).forEach((checkMatchingLeaves(obj.length - (obj.length - 1))) => { return //???});
  return checkValue === /* compare to ??? for boolean value */
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
