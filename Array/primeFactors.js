//Store the prime Factor of number in Array
const prompt = require('prompt-sync')();
let number = prompt("Enter the Number: ");
console.log("Array of Prime Factors:")
let primeFactor = new Array();

//find prime facotr of number
for(let i=2; i*i < number; i++){
    if(number % i == 0){
        primeFactor.push(i)  // store factore in array
        number = number/i;   
    }
}
primeFactor.push(number);
console.log(primeFactor); // print factors of number