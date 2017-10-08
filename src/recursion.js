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
  const val = [];
  (function rec(tmpObj) {
    Object.keys(tmpObj).forEach((key) => {
      if (typeof tmpObj[key] === 'object') return rec(obj[key]);
      val.push(tmpObj[key]);
    });
  }(obj));
  return val.every(x => val[0] === x);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
