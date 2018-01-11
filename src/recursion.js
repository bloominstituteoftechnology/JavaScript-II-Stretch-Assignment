// Complete the following functions.

const nFibonacci = (n) => {
  return n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  return n === 0 ? 1 : n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const simplify = (input) => {
    if (Object(input) !== input) return input;
    const keys = Object.keys(input);
    const firstVal = input[keys[0]];
    return Object(firstVal) === firstVal ? simplify(firstVal) : firstVal;
  };
  const keys = Object.keys(obj);
  const firstVal = obj[keys[0]];
  for (let i = 0; i < keys.length; i++) {
    const currentVal = obj[keys[i]];
    if (Object(currentVal) === currentVal && !checkMatchingLeaves(
      currentVal)) return false;
    if (simplify(currentVal) !== simplify(firstVal)) return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
