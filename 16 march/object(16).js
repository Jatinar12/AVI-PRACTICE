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
    delete obj.lastName;
    console.log(obj.calculateAge());
    console.log(obj);
for(val in obj){
    console.log(`${val}= ${obj[val]}`)
}

for (value in obj){
    console.log(obj.calculateAge());
}



