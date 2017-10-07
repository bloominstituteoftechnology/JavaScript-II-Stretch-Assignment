// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  n--;
  return nFibonacci(n) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const flattenArray = (objToFlatten) => {
    let newArray = [];
    Object.values(objToFlatten).forEach((element) => {
      if (typeof element === 'object' && element !== null) {
        newArray = newArray.concat(flattenArray(element));
      } else { newArray.push(element); }
    });
    return newArray;
  };

  const flattened = flattenArray(obj);
  //
  // --- Fourth test: reduce --- works in repl.it in all cases except some objects with boolean values, so it was rejected
  // --- also, the linter doesn't like it ;-) ---
  // return !!(flattened.reduce((baseValue, testValue) => baseValue === testValue ? baseValue : false));

  // --- Third test: filter --- >>> Works! <<<
  return flattened.filter(testValue => flattened[0] !== testValue).length === 0;

  // --- Second test: forEach --- >>> Works! <<<
  // let test = true;
  // flattened.forEach((testValue) => {
    //   if (testValue !== flattened[0]) test = false;
  // });
  // return test;

  // --- Original test --- >>> Works! <<<
  // for (let i = 1; i < flattened.length; i++) {
  //   if (flattened[0] !== flattened[i]) return false;
  // }
  // return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
