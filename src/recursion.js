// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 0) return;
  if (n <= 1) return 1;
  if (n === 2) return 2;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 0) return;
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const flatten = (tree) => {
    let flattenArray = [];
    const treeKeys = Object.keys(tree);
    treeKeys.forEach((key) => {
      if (typeof tree[key] !== 'object') {
        flattenArray = flattenArray.concat(tree[key]);
      } else {
        flattenArray = flattenArray.concat(flatten(tree[key]));
      }
    });
    return flattenArray;
  };
  let flag = true;
  const keyValues = flatten(obj);
  const value = keyValues[0];
  keyValues.forEach((elements) => {
    if (elements !== value) {
      flag = false;
    }
  });
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
