// Itrating over Objects

var student = {
    name: "abc",
    rollNo: 512,
    marks: 90
};

// Method 1 for in method

// only show the properties of the object 
for(var prop in student){
    console.log(prop);
}

// Show the properties and the value of the object
for(var prop in student){
    console.log(prop, student[prop]);
}

// Method 2 using variable keys
var keys1 = Object.keys(student);

// Method 3 using object.getOwnPropertyName(object);
var keys2 = Object.getOwnPropertyNames(student);