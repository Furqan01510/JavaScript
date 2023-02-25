// Passing Function as Arguments

var factorial = function fact(n){
    var ans = 1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}

function ncr(n,r, factorial){
    return factorial(n) / (factorial(n) * factorial(n-r));
}


console.log(ncr(5,2,factorial));

console.log(ncr(5,2, function fact2(n){
    if(n==0){
        return 1;
    }
    return n * fact2(n-1);
}));