var bmi,height,weight;
height=20;
weight=32;
bmi = weight/(height*height)

function bmii(){


   
    var output= "";

if(height<32)
{
    output="underweight";
}  

else if(height>=20 && weight<=20)
{
    output="Normal Weight";
}
else if(height>=32 && weight<=34)
{
    output="Overweight";
}
else
{
    output="obese";
}
return output
}

var test = bmii(bmi)
console.log(test);