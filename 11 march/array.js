let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for (i=0; i< arr.length; i++)
{
    sum += arr[i];
}
console.log(sum);

let num=0;
for (j=0; j< arr.length; j++){
    if (arr[j]%2==0)
    {
        num += arr[j];
    }
}
console.log(num);

let num1=0;
for (k=0; k< arr.length; k++){
    if (arr[k]%2!=0)
    {
        num1 += arr[k];
    }
}
console.log(num1);