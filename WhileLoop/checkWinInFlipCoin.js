//Flip coin and check either Head or Tail win 11 time
let IS_HEAD = 0;
let IS_TAIL = 1;

let headCount = 0;
let tailCount = 0;

while(headCount < 11 && tailCount < 11){
    let flipCoin = Math.floor(Math.random() * 2) % 10;
    if(flipCoin == IS_HEAD)
    {
        headCount++;
        console.log("Head Count: " +headCount);
    }
    else if(flipCoin == IS_TAIL)
    {
        tailCount++;
        console.log("Tail Count :" +tailCount);
    }
}

if(headCount == 11)
    console.log("Head is win");
else
    console.log("Tail is Win");