// Operators 

// Arithematic Operators
// +, -, *, /, %
console.log('Arithematic');

var aArith = 10;
var bArith = 20;
var cArith;

cArith = aArith + bArith;
console.log(cArith);

cArith = aArith - bArith;
console.log(cArith);

cArith = aArith * bArith;
console.log(cArith);

cArith = aArith / bArith;
console.log(cArith);

cArith = aArith & bArith;
console.log(cArith);

// Assignment 
console.log('Assignement');

var aAssi = 10;
var assTemp;

assTemp = aAssi;
console.log(aAssi);

aAssi += assTemp;
console.log(aAssi);

aAssi -= assTemp;
console.log(aAssi);

aAssi *= assTemp;
console.log(aAssi);

aAssi /= assTemp;
console.log(aAssi);

// Uniary Increment & Decrement
console.log('Increment & Decrement');

var aInc = 10;

aInc++;
console.log(aInc);

++aInc;
console.log(aInc);

aInc--;
console.log(aInc);

--aInc;
console.log(aInc);

// Comparison 
console.log('Comparison');

var aComp = 20;
var bComp = 10;
var resComp;

resComp = aComp > bComp;
console.log(resComp);

resComp = aComp < bComp;
console.log(resComp);

resComp = aComp >= bComp;
console.log(resComp);

resComp = aComp <= bComp;
console.log(resComp);

resComp = aComp != bComp;
console.log(resComp);

resComp = aComp == bComp;
console.log(resComp);

resComp = aComp === bComp;
console.log(resComp);

resComp = aComp !== bComp;
console.log(resComp);

//Logical Operators
console.log('Logical Operators');

var aLog = 50;
var bLog = 20;
var resLog;

resLog = aLog <= 100 && bLog >= 10;
console.log(resLog);

resLog = aLog >= 100 || bLog >= 10;
console.log(resLog);

//Bitwise Operator
console.log('Bitwise');

console.log('Bitwise OR |');
// Bitwise Or |
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2);
console.log(2 | 4);
console.log(4 | 8);

console.log('Bitwise AND &');
// Bitwise Or &
// 1 = 00000001
// 2 = 00000010
// 3 = 00000000
console.log(1 & 2);
console.log(1 & 1);
console.log(2 & 4);
console.log(4 & 8);

// Real Life Example of Bitwise AND &, OR |
console.log('Real Life Example');
// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

