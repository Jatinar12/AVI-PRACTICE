let obj = {
    name: "Jatin",
    age: 23
}

let obj2 = {
    name: "Danish",
    age: 24
}

let result= (obj === obj2) ? true : false;
console.log(result)                                            //False

let result1= (JSON.stringify(obj) === JSON.stringify(obj2)) ? true : false;
console.log(result1)                                           //False