//Find the number is prime or not
const prompt = require('prompt-sync')();
let IS_PRIME = false;
let range = prompt("Enter Number: ");
console.log(" Prime Numbers till "+range);

for(let i=1; i <= range; i++){
    let count = 0;
    for(j=1; j<=i ; j++)
        if(i%j == 0){
            count++;
        }
    if(count == 2)
        console.log(+i);
    else
        continue;    
}