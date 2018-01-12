// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
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
  // return true if every property on `obj` is the same
  // otherwise return false
  const objKeys = Object.keys(obj);
  const firstKey = objKeys[0];

  for (let i = 1; i < objKeys.length; i++) {
    if (firstKey !== objKeys[i]) {
      return false;
    }
  }
};

const testobjT = {
  test: 0,
  test2: 1,
  test3: 2,
};

const testobjF = {
  test1: 0,
  test2: 1,
  test3: 2,
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
