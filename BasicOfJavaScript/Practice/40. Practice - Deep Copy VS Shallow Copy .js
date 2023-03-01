// Deep Copy VS Shallow Copy

// Arrow Function

// Function Expression
var ans = function(x,y){
    return x * y;
}

// Using Arrow Function
var ans1 = (x,y) => {
    return x * y;
}

// It get even shorter
var ans2 = (x,y) => x*y;
console.log(ans2(2,3));

// Deep Copy
// p Copy
// ● In Deep copy, The values that are copied in the new variable are copied and
// disconnected from the original variable, which means if you try to change the
// new variable, the original variable shouldn't have any changes.
// ● For a primitive value, you use a simple assignment:

let num = 5;
let copiedValue = num;

// the origiunal valye remain the same

copiedValue = 10;
console.log(num); // 5

// How to make a Deep copy of arrays or objects?
// By Using Spread Operator
// The spread operator (...) allows us to copy all or part of an existing array or object
// into another array or object

var susan ={
    name: 'Susan',
    age: 30
};

console.log("Before using spread operator");
console.log(susan);

var copiedSusan = {...susan};

copiedSusan.name = "raj";
console.log("After using spread operator");
console.log(copiedSusan);
console.log(susan);


// The other method of Deep copy using Object.assign({},)
var virat = Object.assign({}, susan);
console.log(virat);
virat.name = 'Virat';
virat.age = 45;
console.log(virat);
console.log(susan);

// Shallow Copy 
// In shallow copy, when we copy the original object into the new object, the new
// object has the copy of the original object's memory address, which means
// both objects point to the same memory address.

var person1 = {name: 'John', Age: 25};
var person2 = person1;

console.log(person1 == person2);    // return true
console.log(person1 === person2);   // return true

person2.state = "Stat_name";
console.log(person1);
console.log(person2);