const arr=[1,2,3,4,5];

for(val in arr){
    console.log(val);                       //gives index value
}

for(val of arr){
    console.log(val);                       //gives current value
}