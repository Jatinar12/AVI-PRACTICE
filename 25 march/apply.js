const personName = {
    firstName: "HELLO",
    lastName: "Yes", 
    };                 //object

  

function greet(test, message) {                   //function
  return `${this.firstName}, ${test} ${message}`;
}
  
let result = greet.apply(personName, ["Hy", "It's me JATIN"]);       //apply argument
  
console.log(result);
