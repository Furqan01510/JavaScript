// Deleting Properties in Object

var student = {
    "-name": 'abc',
    rollNo: 512,
    marks: 90,
    "2": "two"
};


delete student.marks;
delete student["2"];
