const prompt = require('prompt-sync')();
const { read } = require('fs');


let date = prompt("Enter the date in between 1-31: ");
let month = prompt("Enter the Month in between 3-6: ");


if (((month == 3) && (date >= 20) && (date <= 31)) || 
    ((month == 4) && (date >= 1) && (date <= 30)) || 
    ((month == 5) && (date >= 1) && (date <= 31)) || 
    ((month == 6) && (date >= 1) && (date <= 20))) 
    
        console.log("True");

else
    console.log("False");
