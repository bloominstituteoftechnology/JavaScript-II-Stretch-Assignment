// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) {
    return 1;
  }
  let result = 0;
  let counter = 2;
  let prev = 1;
  let prevPrev = 1;
  while (counter < n) {
    result = prev + prevPrev;
    const temp = prev;
    prev = result;
    prevPrev = temp;
    counter++;
  }
  return result;
};

const nFactorial = (n) => {
  const o = n - 1;
  if (n === 1) {
    return n;
  }
  return n * nFactorial(o);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
