// == vs ===
console.log('== vs ===');

var varRes;


varRes = 1 == '1';
console.log(varRes);

varRes = 1 != '1';
console.log(varRes);

console.log('=== is introduce to stop aotomatic type coercion');

varRes = 1 === '1';
console.log(varRes);

varRes = 1 !== '1';
console.log(varRes);
