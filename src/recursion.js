// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
// flatten object
// TODO
// https://jsbin.com/qomajibine/edit?js,console

const flattenObject = (nestedObject) => {
  return Object.keys(nestedObject).reduce((toReturn, curKey) => {
    // check if current key/val is an object
    if (typeof nestedObject[curKey] === 'object' && nestedObject[curKey]) {
      // flatten the object
      const flatObject = flattenObject(nestedObject[curKey]);
      // add that flattened object back into the main object
      Object.keys(flatObject).map(key => (toReturn[key] = flatObject[key]));
    } else toReturn[curKey] = nestedObject[curKey];
    return toReturn;
  }, {});
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // flatten object
  const flat = flattenObject(Object.assign({}, obj));

  // obj needs to be flattened
  const t = new Set(Object.values(flat));

  if (t.size === 1) return true;
  return false;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
