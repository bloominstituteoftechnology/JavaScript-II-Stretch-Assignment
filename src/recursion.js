// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // n = ((n-1) + (n-2))
  if (n < 2) {
    return n;
  }

  return (nFibonacci(n - 1) + nFibonacci(n - 2));
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  while (n >= 1) {
    return n * nFactorial(n - 1);
  }
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const keys = Object.keys(obj);  // need an array of properties
  for (let i = 0; i < keys.length; i++) {
    const storage = obj[keys[i]];  // storage hold onto each property
    if (keys.indexOf(storage) === -1) {  // if that element
      obj[keys[i]] = keys;
    }
    return false;
  }
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
