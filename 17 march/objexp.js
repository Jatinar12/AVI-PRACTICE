let obj={
    name:'Danish',
    roll_no: 15,
    sem: 7

}

let obj2={
    name: 'Avinash',
    roll_no: 14,
    sem: 7
}
function showIn(){
    console.log(this.name);
}
let x=showIn.bind(obj2);  
x();
