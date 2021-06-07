//find number is palindrome or not
const prompt = require('prompt-sync')();


let temp;
let number = prompt("Enter the first number: ");

//Function to check number is palindrome or not
function isPalindrome(number){
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


//function to check the palindrome number is prime or not
function isPrime(number){
    let flag = 0;
    for(let i = 2; i<= number/2 ; i++  ){
        if(number % i == 0){
            console.log(number+ " number is not prime");
            flag = 1;
            break;
        }
    }
    if(flag == 0)    
        console.log(number+ " Number is prime");
    
}

isPalindrome(number);
isPrime(number);