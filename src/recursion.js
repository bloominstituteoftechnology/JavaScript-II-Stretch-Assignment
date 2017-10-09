// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
// Not working
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // this works but it took a lot of help and I certainly could not do it again on my own
  let val;
  let match = true;
  const check = (object) => {
    Object.keys(object).forEach((key) => {
      if (val === undefined && key instanceof Object !== true) {
        val = object[key];
        return undefined;
      }
      if ((object[key]) instanceof Object === true) return check(object[key]);
      if ((object[key]) !== val) {
        match = false;
        return undefined;
      }
      return undefined;
    });
  };
  check(obj);
  return match;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
