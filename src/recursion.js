// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1; // i thought this should be n <=2
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};
// isnt fibonacci 11235813... why is there only one 1 here?

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 0) return -1;
  else if (n === 0) return 1;
  let i = n;
  while (n-- > 2) i *= n;
  return i;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let flag = true;
  const checkLeaves = (tree) => {
    Object.keys(tree).forEach((key) => {
      if (val === undefined && typeof key !== 'object') {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') return checkLeaves(tree[key]);
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
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
