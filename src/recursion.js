// Complete the following functions.

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // return n + nFibonacci()
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

// console.log(nFibonacci(6));
/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // initialize  a variable that you can use to find the value at each node
  let value;
  Object.keys(obj).forEach((key) => {
    if (typeof key === 'object') {
      checkMatchingLeaves(key);
    } else if (typeof key !== 'object' && value === undefined) {
      value = key;
    } else if (value !== undefined && value !== key && typeof key !== 'object') return false;
    return true;
  });
};

const nFactorial = (num) => {
  if (num === 0) return 1;
  return num * nFactorial(num - 1);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
