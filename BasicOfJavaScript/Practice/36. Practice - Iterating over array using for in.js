// Iterating over array using for in

var arr = [20, 30, 40, 50];

// Inserting the String in the array
arr.prop1 = "demo";

// Inserting the String in the Array
arr[10] = "dd";

// Inserting the number value in the Array
arr[10] = 10;

// Printing the Array using For in method
// iteration method
for(var i in arr){
    console.log(i);
}