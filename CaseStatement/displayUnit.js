//Read single digit and display number in words
const prompt = require('prompt-sync')();
 
let digit = prompt("Enter Number: ");

switch (Number(digit)) {
    case 1: 
        console.log("One");
        break;
    
    case 10: 
        console.log("Ten");
        break;

    case 100: 
        console.log("Hundred");
        break;

    case 1000: 
        console.log("Thousand");
        break;

    case 10000: 
        console.log("Ten Thousand");
        break;

    case 100000: 
        console.log("Lakh");
        break;

    case 1000000: 
        console.log("Ten Lakh");
        break;

    default:
        console.log("Invalide Input");
        break;
}