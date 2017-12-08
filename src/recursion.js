// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};


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

  let checkValue;
  let doAllValuesMatch;

  const newArr = Object.values(obj);

  function checker() {
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] === 'object' && checkValue === undefined) {
        checkValue = Object.values(newArr[i]);
        for (let j = 0; j < checkValue.length; j++) {
          if (checkValue[j] === newArr[0]) {
            doAllValuesMatch = true;
          } else {
            doAllValuesMatch = false;
          }
          checkMatchingLeaves(newArr[i]);
        }
      } else if (typeof newArr[i] === 'number') {
        // checkValue = newArr[0];
        if (newArr[i] === newArr[0]) {
          doAllValuesMatch = true;
        } else {
          doAllValuesMatch = false;
        }
      }
    }
  }
  checker();
  return doAllValuesMatch;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
