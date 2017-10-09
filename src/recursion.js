// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
  //                     2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811
  // 1:0  4:2 7:8 10:34
  // 2:1  5:3 8:13 11:55
  // 3:1  6:5 9:21 12:89
  // return the nth number in the sequence
  // 5 -> 3
  // 5: 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // !3 = 6
  // !4 = 24
  // !5 = 120
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
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
