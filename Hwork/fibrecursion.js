function fib(n){
    if(n<2){
        return n;
    }
    else{
        return fib(n-1)+fib(n-2);
    }
}
const prompt = require("prompt-sync")();
let  num =prompt("Enter a Fibonacci series");

if(num <=0){
    console.log('Enter a Positive Value');
}
else{
    for(let i=0; i<num; i++){
        console.log(fib(i));
    }
}