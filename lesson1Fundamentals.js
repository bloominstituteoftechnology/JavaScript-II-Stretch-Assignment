const number = 10;
const boolean = true;
const name = "Faiza";
let age = 30;
//const eyeColor = black;
null;
const undef = undefined;
const Person = {
  name: "Faiza",
  occupation: "student"
}
const array = [1, 2, 3, 4, 5];
//typeof = allows you to check what type of of data we entered.
console.log(typeof name);
//console.log(`Hello, my name is ${name}. I am ${age} years old and I have ${eyeColor} eyes.`);

let legalDrinkingAge = false;
if(age >= 21) {
  legalDrinkingAge = true;
}

let isEven = false;
let num = 11;
if(num % 2 === 0){
  console.log(`The number ${num} is even.`);
} else {
  console.log(`The number ${num} is odd.`);
}

function sayHelloToTheWorld(input) {
  return input + "world!";
}
console.log(sayHelloToTheWorld("Hello "));

/*
function countToThirty(num) {
  for(num;; num <= 30; num++) {
    console.log(num);
  }
}
console.log(countToThirty(10));
*/