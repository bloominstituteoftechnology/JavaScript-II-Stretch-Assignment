// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let result = 1;
  let prevNum = 1;
  const helper = (num) => {
    if (n === 0) return;
    prevNum = result;
    result = num;
    n -= 1;
    return helper(result + prevNum);
  };
  helper(result);
  return result;
};

// or const nFibonacci = n => n < 2 ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  return n === 0 ? 1 : nFactorial(n - 1) * n;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const vals = [];
  const helper = (newObj) => {
    const props = Object.keys(newObj);
    props.forEach((prop) => {
      if (typeof newObj[prop] === 'object' && newObj[prop] !== null) {
        helper(newObj[prop]);
        return;
      }
      vals.push(newObj[prop]);
    });
  };
  helper(obj);
  return vals.every(val => val === vals[0]);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
