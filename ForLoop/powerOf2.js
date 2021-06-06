//Power of 2
const prompt = require('prompt-sync')();

let Number = prompt("Enter the Number: ");
let result = Math.pow(2,Number);

console.log("2^n is : " +result);
console.log("Result of Power of 2 till "+result);
for(let i = 2; i <= result; i=i*2){
    let power = i;
    console.log(power);
} 