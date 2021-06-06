//Find the number Factorial
const prompt = require('prompt-sync')();

let number = prompt("Enter Number: ");
let factorial = 1;
for(let counter = 1 ; counter <= number ; counter++){
     factorial = counter * factorial;
}

console.log(+number+ "! = " +factorial);