// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  }
  return (nFibonacci(n - 1) + nFibonacci(n - 2));
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return nFactorial(n - 1) * n;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let flag = true;
  const checkLeaves = (tree) => {
    object.keys(tree).forEach((key) => {
      if (val === undefined && typeof key !== 'object') {
        val = tree[key];
      }
      if (typeof tree[key] === 'object') {
        return checkLeaves(tree[key]);
      }
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
    });
  };
  checkLeaves(obj);
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
