function mult(a){
    return function (b){
        if (b){
              return mult(a*b);
        }
        return a;
    }

}
let x= mult(10)(20)(3)();
console.log(x);