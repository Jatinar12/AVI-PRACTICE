let add= function(x,y){
    return x+y;
}
console.log(add(10,20));       //simple Function

let add1 =(x,y) => x*y;
console.log(add1(2,5));        //arrow function



let add2 =(x) =>{
    return x**2;
}
console.log(add2(5));


const reverseStr = (str) => str.split('').reverse().join('');

console.log(reverseStr('Jatin'));

