// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n > 2) {
    return nFibonacci(n - 2) + nFibonacci(n - 1);
  }
  return 1;
};

// console.log(nFibonacci(5));

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // check if all the values in the object are the same
  let flag;
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 1) {
      flag = true;
    } else if (typeof values[i] === 'object') {
      return checkMatchingLeaves(values[i]);
    } else {
      flag = false;
    }
  }
  if (flag === true) return true;
  return false;
};

const tree1 = {
  x: 1,
  y: 1,
  z: 1,
};
const tree2 = {
  x: 1,
  y: 1,
  z: 2,
};

console.log(checkMatchingLeaves(tree2));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
