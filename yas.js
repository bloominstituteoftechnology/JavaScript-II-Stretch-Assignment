const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};
console.log(nFibonacci(0));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
console.log(nFibonacci(5));


const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 0) return -1;
  else if (n === 0) return 1;
  let i = n;
  while (n-- > 2) i *= n;
  return i;
};

nFactorial(5);

console.log(nFactorial(5));
