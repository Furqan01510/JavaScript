// Function Declaration & Function Expression 

console.log(fact1(5));
console.log(factorial);

// Function Declaration
function fact1(n){
    var ans = 1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}

// Function Expresion
var factorial = function fact2(n){
    var ans = 1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}
console.log(factorial(5));