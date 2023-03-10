var num=345, rem, temp=0;
while(num)
{
rem=num%10;
temp=temp+rem;
num=Math.floor(num/10);
}
console.log(temp);
;