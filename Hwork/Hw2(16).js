let num=n=153, sum=0, rev;
 
while(n){
    rev = n%10;
    sum +=(rev)**3;
    n =parseInt(n/10);
    
}
if(sum==num){
        console.log("Number is armstrong");
}
else{
    console.log('number is not armstrong');
}


