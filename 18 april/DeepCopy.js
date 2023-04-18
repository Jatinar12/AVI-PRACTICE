var employee = {
 
    name: "Jatin",
    address: "New York",
    salary: 50000
}

var Employee = JSON.parse(JSON.stringify(employee));

console.log("Employee=> ", employee);
console.log("Employee=> ", Employee);


Employee.name = "Arora";
Employee.salary = 70000;

console.log("Employee=> ", employee);
console.log("Employee=> ", Employee);