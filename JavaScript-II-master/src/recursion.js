// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci (n - 1) + nFibonacci(n - 2);
};
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if(n === 0) return 1;
  return n * nFactorial(n - 1);
};
console.log(nFactorial(5));

/* Extra Credit */

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let  checker = Object.values(obj);
  if (Object.values(obj).length === 1) return true; 
    if (checker.map(checker[i] === checker[i + 1])) {
      i > checker.length; i++;
    }
};
// const checkMatchingLeaves = (obj) => {
  // initialize some value
  // initialize some flag.. booloean
  // initialize some helper function and pass obj...leaf checker recursive function
    // check all the keys ...for loop/forEach
      // if a key is an object && value is undefined
        // assign value
        // return
      // if a value is an object ==> recurse
      // if a value is found and it doesn't match our initial value
      // trip our flag to false
      // return
  // return true or false
};

/* eslint-enable no-unused-vars */
 
module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
