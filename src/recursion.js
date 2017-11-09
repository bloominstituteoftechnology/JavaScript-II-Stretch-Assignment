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
  const combineObj = (...params) => {
    // Pass in an object to be combined into an array
    let newArr = [];
    Object.values(...params).forEach((objectValue) => {
      // Iterate over an array of the object's values
      if (typeof objectValue === 'object' && objectValue !== null) {
        // for every objectValue that happens to be also a nested object and has values.
        newArr = newArr.concat(combineObj(objectValue));
        return; // exit loop
      }
      newArr.push(objectValue); // Add the values to the end of the newArr
    });
    return newArr; // Return array to be used in comparing the values function.
  };

  const objectToArray = combineObj(obj);

  const returnVal = objectToArray.filter(
    testValue => objectToArray[0] !== testValue,
  );

  return returnVal.length === 0;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
