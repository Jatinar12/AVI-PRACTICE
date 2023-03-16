let obj={
    firstName: "Jatin",
    lastName: 'Arora',
    roll_no: 13,
    emailId: "hdhudfh@gmail",
    age: 2000,
    calculateAge : function(){
        return (2023-this.age)
    }
}
console.log(obj.calculateAge());