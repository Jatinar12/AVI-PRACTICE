let obj={
    name: 'Jatin',
    age: 25,
    }

function getAge(){
    console.log(this.age);
}

let x= getAge.bind(obj);
x();