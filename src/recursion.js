// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // initialize some value...
  // initialize some flag.. boolean.
  // initialize some helper function and pass obj... leaf checker recursive function
    // check all the keys = this is a hint......for loop of some kind
    // if a key is an object && initial value is undef
      // assign value
    // if a value is an object ==> recurse
    // if a value is found, and it doesn't match our initial value
    // trip our flag to false
    // return;
  // return true/false
};

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
