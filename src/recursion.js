// Complete the following functions.

const nFibonacci = (n) => {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return (nFibonacci(n - 1) + nFibonacci(n - 2));
  // fibonacci sequence: [0 1] 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

const nFactorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return (n * nFactorial(n - 1));
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  let val;
  let flag = true;
  const traverseTree = (tree) => {
    Object.keys(tree).forEach((key) => {
      if (typeof key !== 'object' && val === undefined) {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') {
        return traverseTree(tree[key]);
      }
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
    return flag;
  };
  return traverseTree(obj);

  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
