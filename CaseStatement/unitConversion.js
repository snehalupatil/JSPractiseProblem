//Unit conversion
const prompt = require('prompt-sync')();
var conversion = 0;

console.log("1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet")

let option = prompt("Choose the Conversion Option: ");
let digit = prompt("Enter the Number to convert: ");

switch(Number(option)){
    case 1:
        conversion = digit*12;
        console.log("Feet to Inch conversion is: " +conversion);
        break;

    case 2:
        conversion = digit/3.2808;
        console.log("Feet to Meter conversion is: " +conversion);
        break;
        
    case 3:
        conversion = digit*0.083333;
        console.log("Inch to Feet conversion is: " +conversion);    
        break;

    case 4:
        conversion = digit * 3.2808;
        console.log("Meter to Feet conversion is: " +conversion); 
        break; 
        
    default:
        console.log("Invalid Option");
        break;
    }