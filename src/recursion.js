// Complete the following functions.
// const nFibonacci = (n) => n > 2 ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);
const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // debugger;
  // to cover n = 1, each variable starts at 1
  let previous = 1;
  let result = 1; // updates to 2,3,5,8,13 ...
  let count = 1;
  // while (count !== n) { // n = base case
  //   result += previous;
  //   previous = result - previous;
  //   count++;
  // }
  // return result;
  const helper = () => {
    if (n === 0) return;
    previous = result;
    result = n;
    n--;
  }
  return helper(previous + result);
}; // often occurs in nature... n = ?

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  //
  // using recursion:
  // if (n === 1) return 1;
  // return n * nFactorial(n - 1);
  //
  let result = n;
  let count = n - 1;
  while (count > 0) { // base case = 1
    result *= count;
    count--;
  }
  return result;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // debugger;
  const arr = [];
  const props = Object.keys(obj); // [] of obj keys
  const unNest = () => { // reduce all nested objects into one array!
  // obj = {a: {b: {c: {d: e}}}, x: {y:z}}
    props.forEach((item) => { // [a,x]
      if (typeof item === 'object') {
        arr.push(obj[item]);
        unNest();
      }
    });
  };
  // compare each prop, i.e. [a,a,a]
  // for (let i = 0; i < props.length; i++) {
  //   if (props[0] !== props[i]) return false;
  // }
  arr.forEach((item) => {
    if (arr[0] !== item) return false;
  });
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
