let n=1234,
    sum=0,
    rev;
while(n){
    rev = n%10;
    sum = sum+rev;
    n= Math.floor(n/10);
}
console.log(sum);
