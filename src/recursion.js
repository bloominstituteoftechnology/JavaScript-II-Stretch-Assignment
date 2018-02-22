// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let result = 0;
  if (n === 0) return 0;
  if (n <= 2) return 1;
  result = nFibonacci(n - 1) + nFibonacci(n - 2);
  return result;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let result = 1;
  if (n === result) return result;
  result = n * nFactorial(n - 1); return result;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
// return true if every property on `obj` is the same
// otherwise return false
/*   let check = false;
  let keyArray = Object.keys(obj);
  for (let i = 0; i < keyArray.length; i++) {
    if (keyArray[i] === 'object') {
      keyArray = keyArray.concat(checkMatchingLeaves(obj[i]));
    } else {
      keyArray.push(obj[i]);
    }
  }
  const firstItem = keyArray[0];
  for (let i = 0; i < keyArray.length; i++) {
    if (keyArray[i] === firstItem) {
      check = true;
    }
  }
  return check;
}; */

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
