// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  const m = n;
  if (m === 0) {
    return 1;
  }
  return m * nFactorial(m - 1);
};
/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const newArr = Object.values(obj);
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] !== newArr[i + 1]) {
      return false;
    }
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
