// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // F(n) = F(n-1) + F(n-2);
  // F(2) = F(1) + F(0);
  // F(2) = 1 + 0 = 1;
  // F(3) = F(2) + F(1) = 1 + 1 = 2;
  // F(4) = F(3) + F(2) = 2 + 1 = 3;
  if (n <= 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let leavesMatch = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (val === undefined && typeof key !== 'object') {
        val = object[key];
        return;
      }
      if (typeof object[key] === 'object') return checkLeaves(obj[key]);
      if (object[key] !== val) {
        leavesMatch = false;
        return;
      }
      return;
    });
  };
  checkLeaves(obj);
  return leavesMatch;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
