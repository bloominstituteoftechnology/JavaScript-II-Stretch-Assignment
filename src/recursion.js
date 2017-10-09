// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = ((obj) => {
  let leafToCheck;
  let leavesMatch = true;
  const leafChecker = (object) => {
    Object.keys(object).forEach((key) => {
      if (leafToCheck === undefined && key instanceof Object !== true) {
        leafToCheck = object[key];
        return undefined;
      }
      if ((object[key]) instanceof Object === true) return leafChecker(object[key]);
      if ((object[key]) !== leafToCheck) {
        leavesMatch = false;
        return undefined;
      }
      return undefined;
    });
  };
  leafChecker(obj);
  return leavesMatch;
});

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
