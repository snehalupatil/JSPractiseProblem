//Read digit 1,10,100, 1000 and display unit
const prompt = require('prompt-sync')();
let digit = 0;  
digit = prompt("Enter the Number: ");

if(digit==1)
    console.log("One");
else if(digit == 10)
    console.log("Ten");
else if(digit == 100)
    console.log("Hundred");
else if(digit == 1000)
    console.log("Thousand");
else if(digit == 10000)
    console.log("Ten Thousand");
else if(digit == 100000)
    console.log("Lakh");
else if(digit == 1000000)
    console.log("Ten Lakh");
else
    console.log("Invalid input");