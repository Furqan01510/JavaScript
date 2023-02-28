// Nested Objects

var student ={
    name: "abc",
    rollNo: 512,
    marks: 90,
    '2': "two",
    address:{
        city: "City_Name",
        pin: 12300
    }
};

// To access the Nested Array
student.address;
student.address.city;
student.address["city"];

// Syntax
// Object.key1.key2;
// Object["key1"]["key2"];
// Object.key1["key2"];
// Object.key1["key2"];