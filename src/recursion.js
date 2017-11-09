// Complete the following functions.

const nFibonacci = (n) => {
  if (n < 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (num = 1) => {
	if (num === 1) { return num; }
	return num * nFactorial(--num);
}

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const _obj = Object.values(obj);
  for (var i = 1; i < _obj.length; i++) {
  	if (_obj[i] === _obj[0]) return true;
  } return false;
}; console.log(checkMatchingLeaves({a:10,b:11}))

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
