// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let compare;  // compare with this
  let result = true;
  function check(objr) {
    Object.keys(objr).forEach((key) => {  // create array of keys from passed in object
      if (compare === undefined && typeof key !== 'object') { // if compare is undefined and key is not an object
        compare = objr[key];  // set compare to equal the value of the current key
      }
      if (typeof objr[key] === 'object') {  // if key is a nested object
        return check(objr[key]); // run check on this current object until it is no longer a nested object
      }
      if (objr[key] !== compare) {  // if object key is not equal to the compare value
        result = false;  // response is false
      }
    });
  }
  check(obj); // invoke function on object
  return result;
};

// check first object value
// compare first object value with every other object value
// if any are different, return false
// if all are equal, return true;

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
