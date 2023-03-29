function area(radius){
   return Math.PI*radius*radius;
}

function circumference(radius){
    return 2*Math.PI*radius;
}

const arr=[1,2,3,4,5];
function main(arr,logic){
    let dec= [];
    for(var i=0; i<arr.length; i++){
    dec.push(logic(i));

    }
    return dec;

}
console.log(main(arr, area));
console.log(main(arr, circumference));

