// Arrays & Objects

// Arrays are continous value
// Objects are key value pair

// In JavaScript Arrays are key value pair too

var arr = [20, 30, 40, 50];

// To access the array object
arr[0];
arr["0"];

// Array is similar to object with this property

var obj = {
    "0": 20,
    "1": 30,
    "2": 40,
    "2": 50
};

arr[6] = "abc";

// javaScript use type conversation

for(var i in arr){
    console.log(i);
}