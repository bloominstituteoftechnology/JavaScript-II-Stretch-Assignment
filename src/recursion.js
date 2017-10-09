// Complete the following functions.
const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) {
    return 1;
  }

  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

console.log(nFibonacci(10));

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) {
    return n;
  }
  return n * nFactorial(n - 1);
};

console.log(nFactorial(5));


const arrs = [

  1,

  1,

  1,

  [

    [

      1,

      1,

      [

        1,

        [

          1,

          [

            [

              1,

            ],

            2,

          ],

          1,

        ],

        1,

      ],

    ],

    1,

    1,

  ],

  1,

  1,

  [

    1,

    1,

    1,

  ],

];
/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let ents = Object.entries(obj);
  console.log(ents);
  console.log(Object.values(obj));
  console.log(obj);

  console.log(Object.values(obj.child));


  // console.log(obj);

  if (obj.child) {
    if (Object.values(obj) !== Object.values(obj.child)) {
      return false;
    } else {
      if (obj.child.child) {
        checkMatchingLeaves(obj.child);
      } else {
        return true;
      }
    }
  } else {
    return console.log('Only one value: ', true);
  }
};

console.log(checkMatchingLeaves([
  [1],
  [
    [1]
  ],
  [
    [1]
  ]
]));

//console.log(checkMatchingLeaves({1:1, 1:1, 1:1}));
//console.log(checkMatchingLeaves({x:{num:2}, a:1, b:1,}));

//console.log(checkMatchingLeaves(arrs));

// console.log(checkMatchingLeaves({[1],{2}, 1}));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};