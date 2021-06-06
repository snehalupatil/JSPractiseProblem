//compute factor of Number using prime factorization
const prompt = require('prompt-sync')();

let number = prompt("Enter Number: ");

for(let i=2; i < number/2; i++){

    if(number % i == 0){
        console.log(i);
        number = number/i;
        //console.log(number);
    }
}
console.log(number);

    