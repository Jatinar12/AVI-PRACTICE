function sum(a, b) {
    return a * b;
  }
  
 
var result = sum.call( this,5, 10);
console.log(result);
