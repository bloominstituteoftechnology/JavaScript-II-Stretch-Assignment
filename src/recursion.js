// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/* Extra Credit */
const checkMatchingLeaves = (obj, result = false) => {
    // return true if every property on `obj` is the same
    // otherwise return false
  const sample = Object.values(obj)[0];
  result = true;
  const a = Object.keys(obj);

  a.forEach((el) => {
    if (obj[el] !== sample && Object.values(obj[el]).length < 1) {
      result = false;
    } else if (Object.values(obj[el]).length > 0) {
      result = leavesHelper(obj[el], sample, result);
    }
  });

  return result;
};
  // return true if every property on `obj` is the same
  // otherwise return false

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
