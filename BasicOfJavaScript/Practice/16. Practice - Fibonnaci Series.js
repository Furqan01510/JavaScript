// Write your code here:
function fibonacciSeries(n) {    
    var a = 0;
    var b = 1;
    var c;
    
    while(a < n){
        c = a+b;
        a = b;
        b = c;
    }
    
    console.log(a === n);
}
//call function
fibonacciSeries(5);