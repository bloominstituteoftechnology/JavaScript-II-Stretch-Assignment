// Complete the following functions.

// const nFibonacci = (n) => {
//   if (n <= 2) return 1;
//   --n;
//   if (n <= 3) return 2;
//   return (n - 2) + (n - 1);
// };
const nFibonacci = (n) => {
  if (n <= 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence

const nFactorial = (n) => {
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const firstKey = Object.keys(obj)[0];
    for (let i = 1; i < Object.keys(obj).length; i++) {
      if (firstKey !== Object.keys(obj)[i]) {
        return false;
      }
    return true;
    }
  }
}
    if firstKey ===
  }
  const looper = () => {
    for (let i = 0; i < Object.keys(obj).length; i++);
  }
  
    if (i === Object.keys(i))
  // return true if every property on `obj` is the same
  // otherwise return false
};
  // const objChecker = () => {
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
