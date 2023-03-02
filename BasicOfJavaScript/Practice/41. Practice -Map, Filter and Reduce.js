// Map, Filter and Reduce

// The map() Method
// ● The array.map() method allows you to iterate over an array and modify its
// elements using a specified function.
// ● array.map () method does not modify the original array. It returns a new array
// value.

// You might solve using a for loop as follows:
let arr = [2,3,4,5,6];
for(let i =0; i < arr.length; i++){
    arr[i] = arr[i] * 4;
}
console.log(arr); 

// But you can use the array.map() method to achieve the same result. Here's an example:
let arr1 = [2,3,4,5,6];
let modifiedArr = arr1.map(function(element){
    return element * 4;
});
console.log(modifiedArr);

// Reduce Method

// The reduce() method aims to combine the elements in a sequence and give us a reduced single value output
// Syntax 
// array.reduce(function, initialVal)

let arr2 = [200, 450, 280, 670, 770, 435];
let result = arr2.reduce((acc,cur) => acc + cur);
console.log(result);

// Using reduce() with initialValue 0

let arr3 = [200, 450, 280, 670, 770, 435];
let result1 = arr2.reduce((acc,cur) => {
    return acc + cur
}, 0);
console.log(result1);

// Filter Method
let arr4 = [1,3,2,5,7,6];
let ans1 = arr4.filter(isOdd);
console.log(ans1);
function isOdd(x) {
    return x % 2;
};



