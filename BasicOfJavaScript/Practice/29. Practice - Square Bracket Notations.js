// Square Bracket Notation

var student = {
    "-name": 'abc',
    rollNo: 512,
    marks: 90,
    "2": "two"
};

// Empty object creating ways
var obj = {};
var obj = new Object();

// To access the object using Square Brackets
student.marks;
student['mark'];




// student.-marks;  // invalid
student["-name"];   // Valid way to access
student["2"];       // Valid way to access

// Function to print Each Property of Object
function printProperty(obj,prop){
    console.log(obj[prop]);
}
var prop = 'name';
printProperty(student,prop);