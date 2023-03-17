let obj={
    name: 'Jatin',
    age: 23,
    Boolean: true
    }

function getAge(){
    console.log(this.age);
}

let x= getAge.bind(obj);
x();
