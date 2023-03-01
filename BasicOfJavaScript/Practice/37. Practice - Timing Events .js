// Timing Events

// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// setTimeout() to just execute the function once after 2 second
function sayHello(){
    console.log("Hello")
}
setTimeout(sayHello,2000);

// setInterval() repeat the function after 2 seconds
setInterval(sayHello, 2000);

// setinterval() with numbers of count and clearInterval()
var count = 1;
function sayHelloCount(){
    console.log("Hello",count);
    count++;
    if(count==10){
        clearInterval(id);
        return;
    }
}
var id = setInterval(sayHelloCount,2000);

// Reverse Count
var countReverse = 10;
function sayHelloCountReverse(){
    console.log("Hello",countReverse);
    countReverse--;
    if(countReverse==0){
        clearInterval(idReverse);
        return;
    }
}
var idReverse = setInterval(sayHelloCountReverse,2000);