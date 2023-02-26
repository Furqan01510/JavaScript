// ittration over arrays

// There are 3 methods
// 1. For loop/while loop/do while
// 2. ForEach()
// 3. 

var arr = [1,2,3,4,5,6,7];

// for loop mothod
console.log('For Loop Method');
for(var i =0; i<=arr.length;i++){
    console.log(arr[i]);
}
console.log(' ');

// ForEach Method
console.log('ForEach() Method');
function printArr(element){
    console.log(element);
}
arr.forEach(printArr);
console.log(' ');

// function printArr(element, index, Array){}

// For in M Method
console.log('For in M Method');
for(var i in arr){
    console.log(arr[i]);
}

