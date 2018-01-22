// Complete the following functions.

const nFibonacci = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

/*
nFibonacci(5);
(a) returns (b)nFibonacci(4) + (c)nFibonacci(3)
(b) returns (d)nFibonacci(3) + (e)nFibonacci(2)
(c) returns (f)nFibonacci(2) + (g)nFibonacci(1)
(d) returns (h)nFibonacci(2) + (i)nFibonacci(1)
(e) returns 2
(f) returns 2
(g) returns 1
(h) returns 2
(i) returns 1
2+2+1+2+1 = 8, the 5th fibonacci number
*/

const nFactorial = (n) => {
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/*
nFactorial(3)
(1) return 3 * nFactorial(2)
(2) return 2 * nFactorial(1)
(3) return 1
(2a) return 2 * 1 = 2
(1a) return 3 * 2 = 6
3! = 6
*/

/* Extra Credit */
const checkMatchingLeaves = ((obj) => {
  const leaves = []; // empty array for values of object keys
  const findLeaves = ((object) => {  // anonymous function that accepts object as parameter
    Object.values(object).forEach((value) => { // creates array of object values, runs forEach loop over each value/element
      if (value === Object(value)) return findLeaves(value);
      leaves.push(value);
    });
  });
  findLeaves(obj);
  return leaves.every(x => x === leaves[0]);
// return true if every property on `obj` is the same
// otherwise return false
});

// Still super fuzzy on this problem... not sure how the if statement is working


/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
