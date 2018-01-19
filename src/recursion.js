// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  if (n < 2) {
    return n;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

// console.log(nFibonacci(6));

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  const values = [];
  function valuesBuilder(object) {
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === 'object') {
        return valuesBuilder(object[key]);
      }
      values.push(object[key]);
    });
  }
  valuesBuilder(obj);
  console.log(values);
  return values.every(x => values[0] === x);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
