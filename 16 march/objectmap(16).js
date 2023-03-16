
const arr= [1,2,3,4,5];
 for( val of arr){
     console.log(val);
 }

 const newArr = arr.map(myFunction)
 function myFunction(num) {
    console.log(num*10);
 }

arr.forEach(element => console.log(element));


