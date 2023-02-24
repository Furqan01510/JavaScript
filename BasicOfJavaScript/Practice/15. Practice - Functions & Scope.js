// Functions and Scope

var nameScope = 'Scope';
console.log(nameScope);

// Global Scope

var name = 'Global';

function scopeDemo1(){
	var name = 'function';
	console.log(name);
}
scopeDemo1();
console.log(name);

// Function
console.log('scopeDemo2');
function scopeDemo2(){
	console.log(name);
}
scopeDemo2();
console.log(name);

// Execution Stack
function c(){
	console.log('function c')
}
function b(){
	c();
	console.log('function b');
}
function a(){
	b();
	console.log('function a')
}

a();
console.log('Global context');

