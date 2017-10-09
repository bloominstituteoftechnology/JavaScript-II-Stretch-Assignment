// Complete the following functions.
// const nFibonacci = (n) => n > 2 ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);
const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // debugger;
  //
  // using recursion:
  if (n < 2) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
  //
  // to cover n = 1, each variable starts at 1
  // let previous = 1;
  // let result = 1; // updates to 2,3,5,8,13 ...
  // let count = 1;
  // while (count !== n) { // n = base case
  //   result += previous;
  //   previous = result - previous;
  //   count++;
  // }
  // return result;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  //
  // using recursion:
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
  //
  // let result = n;
  // let count = n - 1;
  // while (count > 0) { // base case = 1
  //   result *= count;
  //   count--;
  // }
  // return result;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // debugger;
  const arr = [];
  const unNest = (nextObj) => { // reduce all nested objects into one array
  // obj = {a: {b: {c: {d: e}}}, x: {y:z}}
    const props = Object.keys(nextObj); // [] of obj keys
    props.forEach((item) => { // [a,x]
      if (typeof nextObj[item] === 'object' && nextObj[item] !== null) {
        unNest(nextObj[item]);
        return;
      }
      arr.push(nextObj[item]);
    });
  };
  unNest(obj);
  // compare each prop, i.e. [a,a,a]
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
