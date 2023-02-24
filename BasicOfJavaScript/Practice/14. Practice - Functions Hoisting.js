// Function Hoisting

function hoistDemo1() {
  // variable hoisting
  console.log(i);
  var i = 10;
}
hoistDemo1();

// Function Hoisting
hoistDemo2();
function hoistDemo2() {
  console.log(i);
  var i = 10;
  console.log("hoistDemo2");
}

// function Hoisting & Variable Hoisting
hoistDemo3();
function hoistDemo3() {
  // variable hoisting
  x = 5;
  console.log(x);
  var x;
}

hoisted();
function hoisted() {
  console.log('Hoisted');
}