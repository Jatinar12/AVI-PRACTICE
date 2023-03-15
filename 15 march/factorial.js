
function fact(num){
    if(num == 1){
       return 1;
    }
   return num* fact(num-1);
 }

let x = fact(5);
console.log(x);