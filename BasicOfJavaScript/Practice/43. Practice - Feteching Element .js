// Feteching Elements

var heading1 = document.getElementById('one');
heading1.style.backgroundColor = 'red';
heading1.style.color = "cyan";

var heading2 = document.getElementById('two');
heading2.style.backgroundColor = 'green';
heading2.style.color = "yellow";

var paragraph1 = document.getElementsByClassName('para');
paragraph1[0].style.backgroundColor = "blue";
paragraph1[1].style.backgroundColor = "blue";

heading2.innerText = "Second Heading";
paragraph1[1].innerText = "Second Paragraph";
paragraph1[0].style.color = "white";
paragraph1[1].style.color = "white";
