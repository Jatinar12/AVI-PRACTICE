function * generator(){
    try{
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
    catch(error){
        console.log(error);
    }
}
const it= generator();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
it.throw('error');
