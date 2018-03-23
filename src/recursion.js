// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

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
  const values = [];
  ((function rec(param) {
    Object.keys(param).forEach((key) => {
      if (typeof param[key] === 'object') return rec(param[key]);
      values.push(param[key]);
    });
  })(obj));

  return values.every(x => values[0] === x);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
