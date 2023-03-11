function a(x){
    return function b(y){
        return x+y;
    }
}

let c= a(10);
console.log(c(20));