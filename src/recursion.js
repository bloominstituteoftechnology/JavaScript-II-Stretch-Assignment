// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // 1 1 2 3 5 8   starting with 1 and 1 then add the previous two numbers to get to the Fn = F(n - 1) + F(n - 2)
  if (n < 3) return 1;
  const results = nFibonacci(n - 1) + nFibonacci(n - 2);
  return results;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // n! = 1* 2 *3 *....*n

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
