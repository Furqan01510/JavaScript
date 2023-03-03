// Accessing Elements
var demoById = document.getElementById("demo");

demoById.style.border = "1px solid green";


var demoByClass = document.querySelectorAll('.demo');

demoByClass[0].style.borderColor = "blue";
demoByClass[1].style.borderColor = "blue";

demoByClass[1].innerText = "Second Elements of Class";