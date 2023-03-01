// Pass By Value VS Pass By Ref

function f(a,b,c){
    a=3;            // Pass By Vale
    b.push('bob');  // Pass By ref
    c.first=false;  // Pass By Ref
}

var x = 4;
var y = ['raj','rahul']; 
var z ={first: true};

f(x, y, z);
console.log(x, y, z);

// Only Objects & Arrays are Pass By Reference
// Only Premitives are Pass by Value

// Pass By Value
function passByValue(varOne, VarTwo){
    console.log("Inside Pass by Value Method");
    varOne = 50;
    varTwo = 100;
    console.log("varOne =" + varOne + " VarTwo = " +varTwo);
}

let varOne = 15;
let varTwo = 30;

console.log("Before Call pass by Value Method");
console.log("varOne = "+ varOne +" varTwo = "+varTwo);

passByValue(varOne, varTwo);

console.log("After Call pss by Value Method");
console.log("varOne = "+ varOne +" varTwo = "+varTwo);

// Pass By Refrence Method
function passByReference(Obj,arr){
    console.log("Inside pass by Reference Method");
    Obj.a = 10;
    arr.push("bob");
    console.log(Obj,arr);
}

let Obj = {a:15};
let arr = ["raj","rahul"];
console.log("Beofre Call pass by Refernece Method");
console.log(Obj, arr);

passByReference(Obj,arr);
console.log("After Call pass by Refernece Method");
console.log(Obj, arr);

