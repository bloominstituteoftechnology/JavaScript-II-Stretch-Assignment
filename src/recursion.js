// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  if (n <= 1) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return n;
  return n * nFactorial(--n);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  const keys = Object.keys(obj);
  const propToCheck = keys[0];
  const propToCheck2 = keys[1];
  const matches = obj[propToCheck] === obj[propToCheck2];
  delete obj[propToCheck];

  // if (!matches) return false;
  if (Object.keys(obj).length <= 1) return matches;

  return checkMatchingLeaves(obj);
};

// checkMatchingLeaves({
//           x: 1,
//         y: 1,
//         z: 1,
// });
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
