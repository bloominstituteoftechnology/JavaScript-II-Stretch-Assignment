// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let leaf;
  let result = true;
  const checkMatch = (leaves) => {
    Object.keys(leaves).forEach((key) => {
      if (leaf === undefined && typeof leaf !== 'object') {
        leaf = leaves[key];
        return undefined;
      }
      if (typeof leaves[key] === 'object') return checkMatch(leaves[key]);
      if (leaves[key] !== leaf) {
        result = false;
        return undefined;
      }
    });
  };
  checkMatch(obj);
  return result;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
