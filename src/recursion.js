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
// Recursive leaf check
const checkMatchingLeaves = (obj, arr) => { // Pass in array so as not to reset it with recursion
  // Set up new array
  arr = arr || [];
  // Store reference to object values array
  const objVals = Object.values(obj);

  // Loop through items in values array
  for (let i = 0; i < objVals.length; i++) {
    if (typeof objVals[i] === 'object') { // If item is an object then call recursion
      checkMatchingLeaves(objVals[i], arr);
    } else { // Else store value in new array
      arr.push(objVals[i]);
    }
  }
  // Convert arr to set to elimintate duplicates
  // Convert back to array and check length
  // If length is 1 then all values were identical
  return Array.from(new Set(arr)).length === 1;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
