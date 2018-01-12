// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // if (n === 1) return 1;
  // if (n === 2) return 2;
  // const arr = [1, 2];
  // let count = 2;
  // while (count < n) {
  //   arr.push(nFibonacci(count) + nFibonacci(count - 1));
  //   count++;
  // }
  // return arr[arr.length - 1];
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj, initialProperty) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // REALLY UGGGGGGLY, haahahah
  let count = 0;
  const values = Object.values(obj);
  if (typeof values[0] === 'number') initialProperty = values[0];
  while (count < values.length) {
    const currentValue = values[count];
    if (typeof currentValue === 'object') {
      const firstVal = Object.values(currentValue)[0];
      if (typeof firstVal === 'number' && firstVal !== initialProperty) return false;
      if (!checkMatchingLeaves(currentValue, initialProperty)) return false;
    }
    if (typeof currentValue !== 'object' && currentValue !== initialProperty) return false;
    count++;
  }
  return true;
};

// Michael's code
// let singleProp = null;
// const checkMatchingLeaves = (obj) => {
//   // return true if every property on `obj` is the same
//   // otherwise return false
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === 'object') {
//       checkMatchingLeaves(obj[key]);
//     } else if (singleProp === null) {
//       singleProp = obj[key];
//     } else if (singleProp !== obj[key]) {
//       singleProp = 99;
//     }
//   });
//   return (singleProp !== 99);
// };

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
