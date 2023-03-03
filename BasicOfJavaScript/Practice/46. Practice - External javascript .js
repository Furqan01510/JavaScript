// External javascript 

function sayHello(){
    alert("Hello!!");
}

function sayBye(){
    alert("Byee!!");
}

// Variable declaration
var helloButton = document.getElementById('btn2');

// addEventListener()
helloButton.addEventListener('click',sayHello);
helloButton.addEventListener('click',sayBye);