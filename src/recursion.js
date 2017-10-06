// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let nFib;
  if (n < 1) {
    return null;
  } else if (n === 1 || n === 2) {
    nFib = n;
  } else {
    nFib = (nFibonacci(n - 2) + nFibonacci(n - 1));
  }
  return nFib;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 1) return undefined;
  return (n === 1) ? 1 : n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const vals = Object.values(obj);
  let flattened = [];
  let tempVal;
  let allSame = true;

  const flatten = (elements) => {
    let newArr = [];
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] === 'object') {
        const temp = Object.values(elements[i]);
        newArr = newArr.concat(flatten(Object.values(temp)));
      } else {
        newArr.push(elements[i]);
      }
    }
    return newArr;
  };

  flattened = flatten(vals);

  flattened.forEach((i) => {
    tempVal = flattened[0];
    if (i !== tempVal) allSame = false;
  });

  return allSame;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
