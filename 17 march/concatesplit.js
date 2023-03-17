const arr=[1,2,3,4,5,6];
const arr1=[7,8,9,10];

console.log(...arr);                  //1 2 3 4 5 6
console.log(...arr1);                 //7 8 9 10

console.log(...arr,...arr1);          //12345678910
console.log(...arr,arr1)              //123456[78910]