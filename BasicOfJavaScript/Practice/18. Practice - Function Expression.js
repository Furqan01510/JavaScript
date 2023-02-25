// Function Expression

// Name Function Expression

var factorial = function fact(n){
    var ans = 1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}
console.log(factorial);
console.log(' ');
console.log(factorial(5));

// Anonymous function 
console.log('');
var factAnonymous = function (n){
    var ans = 1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}
console.log(factorial);
console.log(factAnonymous);

console.log(" ");
// Function Recursivly

var factorial1 = function fact1(n){
    if(n==0){
        return 1;
    }
    return n * fact1(n-1);
}
console.log(factorial1(5));

