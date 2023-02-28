// How are Objects Stored

var obj ={
    "p1":10
};

// Storing the Obj location to obj2
var obj2 = obj;

// Now chaning the p1 property value
obj2.p1 = 100;

// checking if both of them are having same location
// obj == obj2
// obj === obj2
var locationResult1 = (obj == obj2);
var locationResult2 = (obj === obj2);

// Printing the Result
console.log(locationResult1);
console.log(locationResult2);

// Now creating obj3 with similar key and property value
var obj3 = {
    "p1": 100
};

// checking if both of them are having same location
// obj == obj3
// obj === obj3
locationResult1 = (obj == obj3);
locationResult2 = (obj === obj3);

// Printing the Result
console.log(locationResult1);
console.log(locationResult2);