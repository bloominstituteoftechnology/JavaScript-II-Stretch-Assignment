// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let num1 = 1;
  let num2 = 2;
  let sum = 3;

  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  function fibFunction() {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    if (n > 3) {
      fibFunction(n - 1);
    }
    return sum;
  }
  return fibFunction(n);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n > 1) {
    n *= nFactorial(n - 1);
  }
  return n;
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
