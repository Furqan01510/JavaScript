// Create and Modify Objects

var student ={
    name:"John",
    age:30,
    rollNo: 12
}

student.address = {
    city: "city_name",
    State: "state_name"
}

// Display Object
console.log(student);

// Delete the Property Rollno
delete student.rollNo;

// Display Object
console.log(student);