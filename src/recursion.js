// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const tree2 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 2,
        },
      },
    },
  },
  r: 1,
};
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const arr = [];
  const unroll = (newobj) => {
    const keys = Object.keys(newobj);
    keys.forEach((item) => {
      if (typeof newobj[item] === 'object' && newobj[item] !== null) {
        unroll(newobj[item]);
        return;
      }
      arr.push(newobj[item]);
    });
  };
  unroll(obj);

  for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) return false;
  }
  return true;
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

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
