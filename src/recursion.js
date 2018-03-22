// Complete the following functions.
const nFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let sum = 1;
  const loop = () => {
    if (n < 2) return sum;
    sum *= n;
    return loop(--n);
  };
  return loop();
};

// console.log(nFactorial(5));

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
