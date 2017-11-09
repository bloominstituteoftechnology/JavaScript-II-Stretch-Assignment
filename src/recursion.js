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
  if (n <= 0) return 1;
  return (n * nFactorial(n - 1));
};

/* Extra Credit */
/*
const checkMatchingLeaves = (obj, testCase) => {
  const obKey = Object.keys(obj);
  if (testCase === undefined) testCase = obj[obKey[0]];
  for (let i = 0; i < obKey.length; i++) {
    if (typeof obj[obKey[i]] === 'object') return checkMatchingLeaves(obj[obKey[i]], testCase);
    if (testCase !== obj[obKey[i]]) return false;
  }
  return true;
};
*/
const checkMatchingLeaves = (obj) => {
  const testCase = obj[Object.keys(obj)[0]];
  const x = (o, tC) => {
    const obKey = Object.keys(o);
    for (let i = 0; i < obKey.length; i++) {
      if (typeof o[obKey[i]] === 'object') return x(o[obKey[i]], tC);
      if (testCase !== o[obKey[i]]) return false;
    }
    return true;
  };
  return x(obj, testCase);
};
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
