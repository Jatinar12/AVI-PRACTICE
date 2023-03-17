let arr=[3,6,8,7,13,98,76];
let count;

const even = arr.filter(n => {
    return n%2 ==0;
});
console.log(even.length);


const odd = arr.filter(num => {
    return num%2 ==1;
});
console.log(odd.length);