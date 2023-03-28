const arr=[1,2,3,4,5];

const it=arr[Symbol.iterator]();


console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);