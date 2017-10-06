// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  n--;
  return nFibonacci(n) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const flattenArray = (objToFlatten) => {
    let newArr = [];
    Object.values(objToFlatten).forEach((element) => {
      if (typeof element === 'object' && element !== null) {
        newArr = newArr.concat(flattenArray(element));
      } else { newArr.push(element); }
    });
    return newArr;
  };

  const flattened = flattenArray(obj);
  for (let i = 1; i < flattened.length; i++) {
    if (flattened[0] !== flattened[i]) return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
