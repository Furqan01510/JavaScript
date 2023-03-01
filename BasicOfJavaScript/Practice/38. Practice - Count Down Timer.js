// Count Down Timer
var countReverse = 10;
function sayHelloCountReverse(){
    if(countReverse==0){
        clearInterval(idReverse);
        return;
    }
    console.log("Hello",countReverse);
    countReverse--;
}
var idReverse = setInterval(sayHelloCountReverse,2000);