// Function with in Function
function outer1(){
    var outerVar = 10
    function inner1(){
        console.log(outerVar);
    }
    inner1();
}
outer1();

console.log(" ");

// Global, Outer2, Inner2
var name = 'Global';
function outer2(){
    var name = 'outer';
    function inner2(){
        var name = 'inner';
        console.log(name);
    }
    inner2();
    console.log(name);
}
outer2();
console.log(name);

console.log(' ');

// Global Global Global
var name1 = 'Global';
function outer3() {
    function inner3(){
        console.log(name1);
    }
    console.log(name1);
    inner3();
}
outer3();
console.log(name1);
