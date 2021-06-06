//Find the magic Number 
const prompt=require('prompt-sync')();

let number  = prompt("Chooes one Number between 1 to 100: " );
let start = 0;
let end = 100;
let mid;
let c = 0;
while ( start < end){
    mid = Math.floor((start + end)/2);
    if (mid == number){
        c = 1;
        break;
}
    else if (mid < number)
        start = mid + 1;
    else
        end = mid - 1;
}

if ( c == 1)
    console.log("Magic Number is "+mid);
else
    console.log("ELement not found");