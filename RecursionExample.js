//make a for loop that counts to 10 and logs out each number
for(let i = 1; i <= 10; i++){
console.log(i);
}

//repeat with while loop
let n = 1;
while(i <= 10) {
    console.log(n);
    n++;
}


const countLoop = (num) => {
    if(num > 10) return;
    console.log(num);
    countLoop(++num);
};
countLoop(1);

Factorials
// n * n - 1;

const nFactorial = num => {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
};

nFactorial(5);

