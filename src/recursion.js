// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // n - 6 (6th number in sequence is 8)... (n-1) + (n-2)... 5th + 4th... 5 + 3 = 8
  return (n < 2) ? n : nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let result = 1;
  if (n === 1 || n === 0) return n;
  result *= n * nFactorial(n - 1); // 5 * 4 * 3 * 2
  return result;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
