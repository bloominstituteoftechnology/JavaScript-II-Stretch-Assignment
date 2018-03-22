// Complete the following functions.

const nFibonacci = (n, tracker, num, prevNum) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  //baseline
  if(tracker === n){
    return num;
  }
  if(num === 0 && prevNum === 0){
    console.log(++num);
    console.log(++prevNum);
    tracker+=2;
    return nFibonacci(n, tracker, num, prevNum);
  }
  else{
    i=num;
    num+=prevNum;
    prevNum = i;
    console.log(num);
    return nFibonacci(n, ++tracker, num, prevNum);
  }
};
console.log('The fifth sequence in Fibonacci is ' + nFibonacci(5, 0, 0, 0));

const nFactorial = (n, runningNum = 1, tracker = 2) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
    if (tracker > n) {
      return runningNum;
    }else{
    runningNum*=tracker;
    return nFactorial(n, runningNum, ++tracker);
    }
};
console.log(nFactorial(6));

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
