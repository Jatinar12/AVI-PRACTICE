const arr=[1,2,3,3,4,5,7,3,4];
let i;
item=10;

function linear(arr,item){
    for(i=0; i<arr.length ; i++)
    {
        if(arr[i]===item){
            return i;
        }
        return -1;
    }
}
console.log(linear(arr,item));