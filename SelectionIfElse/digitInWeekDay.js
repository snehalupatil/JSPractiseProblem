//Read single digit and dispay week days
const prompt = require('prompt-sync')();

let digit = prompt("Enter the Single digit: ");


if(digit == 1)
    console.log("Sunday");
else if(digit == 2)
    console.log("Monday");
else if(digit == 3)
    console.log("Tueday");
else if(digit == 4)
    console.log("Wednesday");
else if(digit == 5)
    console.log("Thursday");
else if(digit == 6)
    console.log("Friday");
else if (digit == 7)
    console.log("Saturday");
else
    console.log("Invalid input");
