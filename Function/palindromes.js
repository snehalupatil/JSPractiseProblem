//find number is palindrome or not
const prompt = require('prompt-sync')();

let reminder;
let temp;
let number = prompt("Enter the number: ");


//Function to check number is palindrome or not
function palindrome(number){
    temp = number;
    rev = 0;
    while(number > 0){
        rev = (rev * 10) + parseInt(number % 10);
        number = parseInt(number / 10);
    }

    if(temp == rev){
        console.log(temp +" is Palindrome");
    }
    else
        console.log(temp +" is not Palindrome");
}

palindrome(number);
