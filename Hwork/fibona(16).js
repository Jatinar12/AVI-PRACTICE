let n=0, 
    n1=1, num1,i;

const prompt = require("prompt-sync")();
let  num =prompt("Enter a Fibonacci series");
for(i=1; i<num; i++)
{
    console.log(n)
    num1= n + n1;
    n=n1;
    n1= num1;
}
