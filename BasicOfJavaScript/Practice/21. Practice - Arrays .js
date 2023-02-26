// Arrays 

var arr1 = [1,2,3,4,5];

var arr2 = new Array(1,2,3,4);

arr1[3];
// array_name[array_index];

arr1.length;
arr1.length;

arr1[7] = 100;
arr2[7] = 100;

// Creating Empty array
var arr3 = new Array();

var arr4 = new Array(2); 
// Array(2) define the empty array length

function printArr(element){
    console.log(element);
}
arr1.forEach(printArr);
console.log(' ');
arr2.forEach(printArr);
console.log(' ');
arr3.forEach(printArr);
arr4.forEach(printArr);

