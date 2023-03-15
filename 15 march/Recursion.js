
function sum(num){
    if(num == 0){
       return 0;
    }
   return num%10 + sum(parseInt(num/10));
 }

let x = sum(1234);
console.log(x);